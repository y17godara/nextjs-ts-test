import { NextResponse } from 'next/server';
import { db } from '@/lib/utils/db';
// import { hash } from 'bcrypt';
import * as argon from 'argon2';

export function GET() {
  return NextResponse.json({ success: true });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, image } = body;

    // check if user already exists
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email,
      },
    });

    const existingUserByUsername = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUserByEmail || existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: 'User already exists',
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await argon.hash(password);

    const newUser = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        image,
      },
    });

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
          image: newUser.image,
        },
        message: 'User created successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        user: null,
        message: "Couldn't create user",
      },
      {
        status: 500,
      }
    );
  }
}
