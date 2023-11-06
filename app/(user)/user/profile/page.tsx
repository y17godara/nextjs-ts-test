import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/utils/auth';

async function Profile() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <h1>Profile</h1>

      {session ? (
        <>
          <p>Session:</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
      ) : (
        <>No session</>
      )}
    </>
  );
}

export default Profile;
