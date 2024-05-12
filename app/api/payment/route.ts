import getCurrentUser from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import PaymentSchema from "@/app/components/paymetValidation/PaymentSchema";

export async function POST(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { firstName,lastName,proposalId,receipt,amount } = await request.json();
        const validation = PaymentSchema.safeParse({firstName,lastName,proposalId,receipt,amount});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const payment = await prisma.payment.create({
            data: {
                firstName,
                lastName,
                receipt,
                amount,
                userEmail: user.email,
                proposalId,
            }
        });
        return NextResponse.json(payment, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

