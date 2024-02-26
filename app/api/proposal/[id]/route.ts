import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validationSchema } from "@/app/validationSchema";

export async function PATCH(request: NextRequest,
    {params}: {params: {id:string}}){
    const body=await request.json();
    const validation=validationSchema.safeParse(body);
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
    data:{firstName:body.firstName,
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
        ondamage:body.ondamage,
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
        // const deleteProposal=await prisma.proposal.delete({
        //     where: {id:parseInt(params.id)}
        // });
        return NextResponse.json({});
    }
//deleteProposal
