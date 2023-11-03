import RegisterForm from '@/components/auth/RegisterForm';

const page = () => {
  return (
    <section className='w-screen min-h-screen flex flex-col items-center justify-center gap-4'>
    <div className='w-full max-w-lg p-4'>
      <RegisterForm />
    </div>
  </section>
  );
};

export default page;