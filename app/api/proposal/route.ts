import { User } from '@prisma/client';
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validationSchema } from "../../validationSchema";


export async  function POST(request: NextRequest){
    const body=await request.json();
    const validation=validationSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }

const newProposal=await prisma.proposal.create({
    data:{
         firstName:body.firstName,
         lastName:body.lastName,
         model:body.model,
         woreda:body.woreda,
         kebele:body.kebele,
         phoneNo:body.phoneNo,
         occupation:body.occupation,
         startDate:body.startDate,
         endDate:body.endDate,
         proposedDate:body.proposedDate,
         branch:body.branch,
         comprehensive:body.comprehensive, 
         thirdParty:body.thirdParty,
         thirdPartyFireAndTheft:body.thirdPartyFireAndTheft,
         ondamage:body.ondamage
        },
})
return NextResponse.json(newProposal,{status:200});   
}
