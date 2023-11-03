import { NextResponse } from 'next/server';
import { db } from '@/lib/utils/db';
import { hash } from 'bcrypt';

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
      return NextResponse.json({
        status: 409,
        message: 'User already exists with that email or username',
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        image,
      },
    });

    return NextResponse.json({
      user: {
        email: newUser.email,
        username: newUser.username,
      },
      message: 'User created successfully',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      user: null,
      message: "Couldn't create user",
      status: 500,
    });
  }
}
