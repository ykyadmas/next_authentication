import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { messageValidationSchema } from "@/app/components/messageValidationSchema";
import getCurrentUser from "@/lib/session";

export async function POST(request: NextRequest) {

   try {
    const user=await getCurrentUser()

    if(!user){
      return NextResponse.json({messgae:"User Not Found"},{status:401})
    }
    const body = await request.json();
    const validation = messageValidationSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }
  
    const message = await prisma.message.create({
      data: { subject: body.subject, sentMessage: body.sentMessage,userEmail:user.email }
    });
  
    return NextResponse.json(message, { status: 200 });
   } catch (error) {
    return NextResponse.json({message:"error occured"},{status:500})
   }
  }