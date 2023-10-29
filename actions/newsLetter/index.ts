'use server';
// import axios from 'axios';
import { sendMail } from '@/lib/nodeMailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handleNewsletterSubscription(
  email: string
): Promise<{ status: number }> {
  try {
    const existingSubscription = await prisma.emailSubscription.findFirst({
      where: { email },
    });

    // If the user is not already subscribed, create a new subscription.
    if (existingSubscription) {
      console.log('Email already exists');
      return Promise.resolve({ status: 400 });
    }

    console.log('Email does not exist, Subscribing...');

    await prisma.emailSubscription.create({
      data: { email },
    });

    // Send a confirmation email to the user.
    // await sendMail(
    //   'Newsletter subscription confirmation',
    //   email,
    //   'You have successfully subscribed to our newsletter!'
    // );
    console.log('Email Sent');

    const status = 200;
    return Promise.resolve({ status });
  } catch (error) {
    console.log('Error while subscribing to newsletter', error);
    const status = 500;
    return Promise.resolve({ status });
  }
}
