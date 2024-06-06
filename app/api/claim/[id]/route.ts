import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import ClaimSchema from "@/app/components/ClaimForm/ClaimSchema";
import getCurrentUser from "@/lib/session";

export async function  PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }

        const { driverFullName, driverAddress, driverOccupation, place, age, LicenceNo, policyFile, carFile, PaymentId, acidentDate, time } = await request.json();

        const validation = ClaimSchema.safeParse({ driverFullName, driverAddress, driverOccupation, place, age, LicenceNo, policyFile, carFile, PaymentId, acidentDate, time });

        if (!validation.success) {
            return NextResponse.json(validation.error.format(), { status: 400 });
        }

        const claim = await prisma.claimForm.findUnique({
            where: { id: parseInt(params.id) },
        });

        if (!claim) {
            return NextResponse.json({ error: 'Invalid Claim' }, { status: 404 });
        }

        const updateClaim = await prisma.claimForm.update({
            where: { id: claim.id },
            data: {
                driverFullName,
                driverAddress,
                driverOccupation,
                place,
                age,
                LicenceNo,
                policyFile,
                carFile,
                acidentDate,
                time,
                PaymentId,
                userEmail: user.email,
            },
        });

        return NextResponse.json(updateClaim);
    } catch (error) {
        console.error('Error updating claim:', error); // Log the error for debugging
        return NextResponse.json({ message: 'Error Occurred During Updating', error: error.message }, { status: 500 });
    }
}

        
export async function DELETE(request: NextRequest,
    {params}: {params: {id:string}}){
        const claim=await prisma.claimForm.findUnique({
            where: {id:parseInt(params.id)}
        });
        if(!claim) 
        return NextResponse.json(
            {error:'Invalid Proposal'},
            {status:404});
            await prisma.claimForm.delete({
            where:{id:claim.id}
            })

        return NextResponse.json({});
    }
