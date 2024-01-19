import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { messageValidationSchema } from '../../components/messageValidationSchema';

export async  function POST(request: NextRequest){
    const body=await request.json();
    const validation=messageValidationSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }

const newMessage=await prisma.proposal.create({
    data:{emailMessage:body.emailMessage,subject:body.subject,message:body.message}
}) 
return NextResponse.json(newMessage,{status:200});   
}