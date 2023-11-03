import nodemailer from 'nodemailer';

type MailInfo = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  date: Date;
};

type SendMailFunction = (params: {
  subject: string;
  toEmail: string;
  otpText: string;
}) => Promise<{ status: number }>;

/* function: sendMail */
const sendMail: SendMailFunction = async ({ subject, toEmail, otpText }) => {
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

    const date = new Date();
    // Send the email
    const info = (await transporter.sendMail({
      from: '"Yash Godara" <cs.y17godara@gmail.com>',
      to: toEmail.toString(),
      subject,
      text: otpText,
      date,
      html: `<b>${otpText}</b>`,
    })) as MailInfo;

    // If the email was sent successfully, return a 200 status.
    console.log('Message sent: %s', { info });
    return Promise.resolve({ status: 200 });
  } catch (error) {
    // If there was an error, return a 500 error.
    console.log('Error while sending email', error);
    return Promise.resolve({ status: 500 });
  }
};

export default sendMail;
