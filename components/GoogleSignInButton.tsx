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
      <Icons.googleIcon className='max-h-[30px] w-[auto]' />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
