"use client";
import React from 'react';
import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1>Contact</h1>
      <p>
        <strong>Session:</strong> {JSON.stringify(session, null, 2)}
      </p>
    </>
  );
};

export default Page;
