import getCurrentUser from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cancelSchema from "@/app/components/paymetValidation/cancelSchem";

export async function POST(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { PaymentId, cancilationDate ,cancilationTime,reason } = await request.json();
        const validation = cancelSchema.safeParse({PaymentId,cancilationDate ,cancilationTime,reason});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const cancel = await prisma.insuranceCancelation.create({
            data: {
                cancilationDate ,
                cancilationTime,
                reason,
                userEmail: user.email,
                PaymentId
            }
        });
        return NextResponse.json(cancel, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

