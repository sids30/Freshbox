import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Resend } from 'resend';
import prisma from '@/prisma/client';
import { welcomeEmail } from '@/app/utils/emailTemplates/welcomeEmail';

// Instantiate once — avoids creating a new client on every request
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        role: 'STUDENT',
        isVerified: true, // In production, set to false and implement email verification
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
      },
    });

    // Send welcome email — Resend v6 never throws for API errors;
    // it returns { data, error } instead. We check `error` explicitly
    // so failures are always visible in the terminal without blocking signup.
    // NOTE: onboarding@resend.dev only works when sending to the email
    // address registered with your Resend account. For any other recipient
    // you must add and verify your own domain at resend.com/domains.
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'FreshBox <onboarding@resend.dev>',
      to: user.email,
      subject: 'Welcome to FreshBox! 🌿',
      html: welcomeEmail(user.firstName),
    });

    if (emailError) {
      console.error('[Resend] Welcome email failed:', JSON.stringify(emailError, null, 2));
    } else {
      console.log('[Resend] Welcome email sent — id:', emailData?.id);
    }

    return NextResponse.json(
      {
        message: 'Account created successfully',
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'An error occurred during signup' },
      { status: 500 }
    );
  }
}
