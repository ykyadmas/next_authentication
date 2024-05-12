import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validationSchema } from "@/app/validationSchema";

export async function PATCH(request: NextRequest,
    {params}: {params: {id:string}}){
    const {firstName,
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
        ondamage}=await request.json();
    const validation=validationSchema.safeParse({
        firstName,
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
    });
    if(!validation.success)
    return NextResponse.json(validation.error.format(),{status:400});

   const proposal=await prisma.proposal.findUnique({
    where: {id:parseInt(params.id)},
   });

   if(!proposal) 
return NextResponse.json(
    {error:'Invalid Proposal'},
    {status:404}
    );

const updateProposal = await prisma.proposal.update({
    where: {id:proposal.id},
    data:{firstName,
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
    }
  });
return NextResponse.json(updateProposal);
}
export async function DELETE(request: NextRequest,
    {params}: {params: {id:string}}){
        const proposal=await prisma.proposal.findUnique({
            where: {id:parseInt(params.id)}
        });
        if(!proposal) 
        return NextResponse.json(
            {error:'Invalid Proposal'},
            {status:404});
            await prisma.proposal.delete({
            where:{id:proposal.id}
            })

        return NextResponse.json({});
    }
