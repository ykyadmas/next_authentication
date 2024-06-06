import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/lib/session";
import PaymentSchema from "@/app/components/paymetValidation/PaymentSchema";

export async function PATCH(request: NextRequest,
    
    {params}: {params: {id:string}}){
        try {
            const user = await getCurrentUser();

            if (!user?.email) {
                return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
            }
            const { firstName,lastName,proposalId,receipt,amount } = await request.json();

            const validation = PaymentSchema.safeParse({firstName,lastName,proposalId,receipt,amount});

    if(!validation.success)
    return NextResponse.json(validation.error.format(),{status:400});

   const insurance=await prisma.payment.findUnique({
    where: {id:parseInt(params.id)},
   });

   if(!insurance) 
return NextResponse.json(
    {error:'Invalid Proposal'},
    {status:404}
    );

const updateInsurance = await prisma.payment.update({
    where: {id:insurance.id},
    data: {
        firstName,
        lastName,
        receipt,
        amount,
        userEmail: user.email,
        proposalId,
    }
  });
return NextResponse.json(updateInsurance);
} catch (error) {
    return NextResponse.json("Error Ocuured During Updating",{status:500});
}
}
        
        
export async function DELETE(request: NextRequest,
    {params}: {params: {id:string}}){
        const claim=await prisma.payment.findUnique({
            where: {id:parseInt(params.id)}
        });
        if(!claim) 
        return NextResponse.json(
            {error:'Invalid Proposal'},
            {status:404});
            await prisma.payment.delete({
            where:{id:claim.id}
            })

        return NextResponse.json({});
    }
