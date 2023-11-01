import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
    </>
  );
};

export default Provider;
