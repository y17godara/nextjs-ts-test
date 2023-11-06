import LoginForm from '@/components/auth/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

const page = () => {
  return (
    <>
      <section className='flex min-h-screen w-screen flex-col items-center justify-center gap-4'>
        <div className='w-full max-w-lg p-4'>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default page;
