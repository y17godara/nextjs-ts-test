import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = async () => {
    const response = await signIn('google');

    if (response?.error) console.log(response.error);
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/user/profile`);
  };

  return (
    <Button onClick={loginWithGoogle} className='w-full gap-2'>
      <Icons.googleIcon className='max-h-[30px] w-[auto]' />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
