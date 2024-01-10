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
    data:{
        firstName:body.firstName,
        lastName:body.lastName,
        model:body.model
    },
  
});
return NextResponse.json(updateProposal);
}
