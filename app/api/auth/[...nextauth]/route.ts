import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { googleProvider } from '@/lib/utils/auth';
import { randomUUID, randomBytes } from 'crypto';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [googleProvider] as any;

  return NextAuth(req, res, {

    // secret key
    secret: process.env.NEXTAUTH_SECRET,

    // providers
    providers,

    // session config
    session: {
      strategy: 'jwt',

      // session token
      generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString('hex');
      },
    },
  }) as Promise<NextAuthOptions>;
}
