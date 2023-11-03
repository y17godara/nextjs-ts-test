import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button onClick={loginWithGoogle} className='w-full gap-2'>
      <Icons.googleIcon className='w-[auto] max-h-[30px]' />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;