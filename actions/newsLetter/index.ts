import axios from 'axios';
import { sendMail } from '@/lib/nodeMailer';

export function handleNewsletterSubscription(
  email: string
): Promise<{ status: number }> {
  const status = 200;
  return Promise.resolve({ status });
}
