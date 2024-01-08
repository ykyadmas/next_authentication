import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { CreateProposalSchema } from "../../validationSchema";


export async  function POST(request: NextRequest){
    const body=await request.json();
    const validation=CreateProposalSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }

const newProposal=await prisma.proposal.create({
    data:{firstName:body.firstName,lastName:body.lastName,model:body.model}
}) 
return NextResponse.json(newProposal,{status:200});   
}