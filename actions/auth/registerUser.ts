'use server';
import axios from 'axios';

interface userSchema {
  username: string;
  email: string;
  image: string;
  password: string;
}

export async function registerUser(data: userSchema) {
  try {
    const user = {
      username: data.username,
      email: data.email,
      image: data.image,
      password: data.password,
    };

    // Make a POST request to your API endpoint
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`, user, {
      headers: {
        'Content-Type': 'application/json', // Example header
      },
    });

    // Handle the response from the server
    console.log({
      'New User Created: ': response.data,
    });
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error('Server Error While Creating New User: ', error);
  }
}
