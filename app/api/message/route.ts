import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { messageValidationSchema } from '@/app/components/messageValidationSchema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = messageValidationSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const message = await prisma.message.create({
    data: { emailMessage: body.emailMessage, subject: body.subject, sentMessage: body.sentMessage },
  });

  return NextResponse.json(message, { status: 200 });
}