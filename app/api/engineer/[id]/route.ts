import { prisma } from "@/lib/prisma";
import { NextResponse,NextRequest } from "next/server";
export async function DELETE(request: NextRequest,
    {params}: {params: {id:string}}){
        const engineerSurvey=await prisma.engineerSurvey.findUnique({
            where: {id:parseInt(params.id)}
        });
        if(!engineerSurvey) 
        return NextResponse.json(
            {error:'Invalid Proposal'},
            {status:404});
            await prisma.engineerSurvey.delete({
            where:{id:engineerSurvey.id}
            })
        return NextResponse.json({});
    }