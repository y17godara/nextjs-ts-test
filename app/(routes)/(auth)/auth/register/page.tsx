import RegisterForm from './RegisterForm';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register page',
};

const Page = async() => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/`);
  }
  return (
    <section className='flex min-h-screen w-auto flex-col items-center justify-center gap-4'>
      <div className='w-full max-w-lg p-4'>
        <RegisterForm />
      </div>
    </section>
  );
};

export default Page;
