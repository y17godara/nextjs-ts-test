import React from 'react';
import ComingSoon from '@/pages/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon',
};

function ComingSoonPage() {
  return (
    <div>
      <ComingSoon />
    </div>
  );
}

export default ComingSoonPage;
