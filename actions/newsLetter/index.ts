'use server';

// Imports/dependencies
import sendMail from './sendMail';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // instantiate the PrismaClient

/* function: handle letter subscription request */
export async function handleNewsletterSubscription(
  email: string
): Promise<{ status: number }> {
  try {
    // Check if the email already exists in the database.
    const existingSubscription = await prisma.emailSubscription.findFirst({
      where: { email },
    });

    // If the email already exists, return a 400 error.
    if (existingSubscription) {
      // console.log('Email already exists');
      return Promise.resolve({ status: 400 });
    }

    // console.log('Email does not exist, Subscribing...');

    // If the email does not exist, create a new subscription.
    await prisma.emailSubscription.create({
      data: {
        uuid: uuidv4(),
        email,
        active: true,
      },
    });

    // Send a confirmation/welcome email to the user.
    const emailResponse = await sendMail({
      subject: 'Newsletter Subscription',
      toEmail: email.toString(),
      otpText: 'You have successfully subscribed to our newsletter.',
    });

    // If the email was not sent successfully, return a 500 error.
    if (emailResponse.status !== 200) {
      return Promise.resolve({ status: 500 });
    }

    // If the email was sent successfully, return a 200 status.
    return Promise.resolve({ status: 200 });
  } catch (error) {
    // If there was an error, return a 505 error.
    return Promise.resolve({ status: 505 });
  }
}
