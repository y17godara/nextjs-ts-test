import GoogleProvide from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

export const googleProvider = [
  GoogleProvide({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  }),
];

export const credentialsProvider = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials, req) {
      if (!credentials) {
        // Handle the case where credentials are undefined
        return null;
      }

      const data = {
        username: credentials.username,
        password: credentials.password,
      };

      try {
        const response = await axios.post(
          'https://localhost:3000/login',
          data,
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (response.status === 200) {
          return { ...response.data, status: response.status };
        } else {
          return { error: 'Login failed', status: response.status };
        }
      } catch (error) {
        console.error(error);
        return { error: 'Login failed', status: error };
      }
    },
  }),
];
