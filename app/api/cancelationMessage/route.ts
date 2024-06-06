import getCurrentUser from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cancelMessageSchema from "@/app/components/paymetValidation/cancelationMessage";

export async function POST(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { PaymentId,message } = await request.json();
        const validation = cancelMessageSchema.safeParse({PaymentId,message});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const cancelMessage = await prisma.insuranceCancelationMessage.create({
            data: {
                message,
                userEmail: user.email,
                PaymentId
            }
        });
        return NextResponse.json(cancelMessage, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

