import { getServerSession } from 'next-auth';
import { authOptions } from 'auth';
import LogOutButton from '@/components/auth/LogOutButton';
import LogInButton from '@/components/auth/LogInButton';

const AuthButton = async () => {
  const session = await getServerSession(authOptions);
  return <>{session ? <LogOutButton /> : <LogInButton />}</>;
};

export default AuthButton;
