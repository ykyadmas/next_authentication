import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFound from './NotFound';

interface Props {
    claimId: number;
}

const ClaimResponse = async ({ claimId }: Props) => {
    const display = await prisma.damageEvaluator.findMany({
        where: { claimId },
        include: {
            user: true,
            claim:true,
        }
    });

    if (!display || display.length === 0) {
        return <NotFound />;
    }

    const survey = display[0];

    return (
        <div className="overflow-x-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello {survey.user.firstName}</h1>
                        <p className="py-6">Hi {survey.user.firstName}, <span className='text-green-400'>{survey.message} </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimResponse;
