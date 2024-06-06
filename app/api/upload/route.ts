
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import PaymentSchema from "@/app/components/paymetValidation/PaymentSchema";
import getCurrentUser from "@/lib/session";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { firstName,lastName,receipt,amount,proposalId } = await request.json();
        const validation = PaymentSchema.safeParse({proposalId, firstName,lastName,receipt,amount });
        if (!validation.success) {
            return NextResponse.json({ errors: validation.error.errors }, { status: 400 });
        }
        const file = await prisma.payment.create({
            data: {
                firstName,
                lastName,
                receipt,
                amount,
                proposalId,
                userEmail: user.email,
            }
        });
        return NextResponse.json(file, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}


