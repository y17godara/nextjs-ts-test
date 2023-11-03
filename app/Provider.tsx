import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
// import { SessionProvider } from 'next-auth/react';

const Provider = ({
  children, // Session
}: {
  children: React.ReactNode;
  // Session: Session | null;
}) => {
  // const session = null;
  return (
    <>
      {/* <SessionProvider session={Session}> */}
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <div className='relative flex min-h-screen flex-col'>
          {/* <Header /> */}
          <main className='flex-1'>{children}</main>
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
      <Toaster />
      {/* </SessionProvider> */}
    </>
  );
};

export default Provider;
