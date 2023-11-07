import RegisterForm from '@/components/auth/RegisterForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register page',
};

const page = () => {
  return (
    <section className='flex min-h-screen w-auto flex-col items-center justify-center gap-4'>
      <div className='w-full max-w-lg p-4'>
        <RegisterForm />
      </div>
    </section>
  );
};

export default page;
