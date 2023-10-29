import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function sendMail(
  subject: string,
  toEmail: string,
  otpText: string
): Promise<void> {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
