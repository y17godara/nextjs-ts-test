import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import { signIn } from 'next-auth/react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn('google',  { callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}` });

  return (
    <Button onClick={loginWithGoogle} className='w-full gap-2'>
      <Icons.googleIcon className='max-h-[30px] w-[auto]' />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
