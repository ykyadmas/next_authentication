import getCurrentUser from "@/lib/session";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import DamageSchema from "@/app/damageEvaluator/_comopnents/lib/DamageSchema";

const prisma = new PrismaClient();

export async function POST(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const user = await getCurrentUser();

        if (!user?.email) {
            return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
        }
        const { firstName,lastName,message,claimId,payments,file } = await request.json();
        const validation = DamageSchema.safeParse({firstName,lastName,message,claimId,payments,file});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const damage = await prisma.damageEvaluator.create({
            data: {
                firstName,
                lastName,
                message,
                file,
                userEmail: user.email,
                claimId
            }
        });
        return NextResponse.json(damage, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
