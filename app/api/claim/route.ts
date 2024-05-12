import ClaimSchema from "@/app/components/ClaimForm/ClaimSchema";
import getCurrentUser from "@/lib/session";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { driverFullName,driverAddress,driverOccupation,place,age,LicenceNo,policyFile,carFile,PaymentId, acidentDate,time } = await request.json();
        const validation = ClaimSchema.safeParse({driverFullName,driverAddress,driverOccupation,place,age,LicenceNo,policyFile,carFile,PaymentId,acidentDate,time});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const claim = await prisma.claimForm.create({
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
                
            }
        });
        return NextResponse.json(claim, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}





