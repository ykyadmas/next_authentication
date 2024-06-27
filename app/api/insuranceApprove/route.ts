import getCurrentUser from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import InsuranceSchema from "@/app/components/paymetValidation/insuranceAprroveSchema";

export async function POST(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { PaymentId ,status } = await request.json();
        const validation = InsuranceSchema.safeParse({PaymentId,status});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const approveInsurance = await prisma.insuranceApprove.create({
            data: {
                status,
                userEmail: user.email,
                PaymentId
            }
        });
        return NextResponse.json(approveInsurance, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

