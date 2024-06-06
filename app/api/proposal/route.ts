import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validationSchema } from "../../validationSchema";
import getCurrentUser from "@/lib/session";


export async  function POST(request: NextRequest){

    try {
        const user=await getCurrentUser()
        if(!user){
            return NextResponse.json({messgae:"User Not Found"},{status:401})
        }

    const{firstName,chassisNo,lastName,model,woreda,kebele,phoneNo,occupation,startDate,endDate, proposedDate,branch,comprehensive, thirdParty,thirdPartyFireAndTheft,ondamage}=await request.json();
    const validation=validationSchema.safeParse({firstName,chassisNo,lastName,model,woreda,kebele,phoneNo,occupation,startDate,endDate, proposedDate,branch,comprehensive, thirdParty,thirdPartyFireAndTheft,ondamage});

        if(!validation.success){
            return NextResponse.json(validation.error.errors,{status:400})
        }
    
    const newProposal=await prisma.proposal.create({
        data:{
             userEmail:user.email,
             firstName,
             chassisNo,
             lastName,
             model,
             woreda,
             kebele,
             phoneNo,
             occupation,
             startDate,
             endDate,
             proposedDate,
             branch,
             comprehensive, 
             thirdParty,
             thirdPartyFireAndTheft,
             ondamage
            },
    })
    return NextResponse.json(newProposal,{status:200});
} catch (error) {
    console.error("Error occurred while processing request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
}
     
}
