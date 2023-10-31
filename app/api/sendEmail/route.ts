import nodemailer from 'nodemailer';

/* function: sendMail */
async function sendMail({
  subject,
  toEmail,
  otpText,
}: {
  subject: string;
  toEmail: string;
  otpText: string;
}): Promise<{ status: number }> {
  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    } as nodemailer.TransportOptions); // type assertion

    // Send the email
    const info = await transporter.sendMail({
      from: `"yash godara" <no-reply@example.com>`,
      to: toEmail,
      subject,
      text: otpText,
    });

    // If the email was sent successfully, return a 200 status.
    console.log('Message sent: %s', info);
    return Promise.resolve({ status: 200 });
  } catch (error) {
    // If there was an error, return a 500 error.
    console.log('Error while sending email', error);
    return Promise.resolve({ status: 500 });
  }
}

export default sendMail;
