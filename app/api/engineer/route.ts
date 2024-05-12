import EngineersSchema from "@/app/admin/_lib/EnginersSchema";
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
        const { firstName,lastName,message,proposalId,payments } = await request.json();
        const validation = EngineersSchema.safeParse({firstName,lastName,message,proposalId,payments});
        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }
        const answer = await prisma.engineerSurvey.create({
            data: {
                firstName,
                lastName,
                message,
                payments,
                userEmail: user.email,
                proposalId
            }
        });
        return NextResponse.json(answer, { status: 200 });
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
