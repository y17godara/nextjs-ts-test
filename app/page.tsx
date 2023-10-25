import ComingSoon from '@/pages/ComingSoon';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of yashgodara.me',
};

export default function Home() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
