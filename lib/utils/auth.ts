import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as argon from 'argon2';
import { db } from '@/lib/utils/db';

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export const authOptions: NextAuthOptions = {
  // adapter
  adapter: PrismaAdapter(db),
  // session
  session: {
    strategy: 'jwt',
  },
  // pages
  pages: {
    signIn: '/auth/login',
    // newUser: '/auth/register',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
  },
  // secret
  secret: process.env.NEXTAUTH_SECRET,
  // providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
        image: { label: 'Image', type: 'text', placeholder: 'https://...' },
      },
      async authorize(credentials, req) {
        try {
          // check if credentials are valid
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          // check if user already exists
          const existingUserByEmail = await db.user.findUnique({
            where: { email: credentials?.email },
          });

          if (!existingUserByEmail) {
            return null;
          }

          // check if password is valid
          const isValid = await argon.verify(
            existingUserByEmail.password,
            credentials.password
          );

          if (!isValid) {
            return null;
          }

          // return user
          return {
            id: `${existingUserByEmail.uuid}`, // string
            name: existingUserByEmail.username,
            email: existingUserByEmail.email,
            image: existingUserByEmail.image,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
};
