import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from './NotFoundPage';
import PaymentForm from '@/app/components/PaymentForm/paymentForm';
import Insurance from '@/app/components/Insurance/Insurance';
import DisplayUserName from './DisplayUserName';

interface Props {
    proposalId: number;
}

const SurveyDisplayUser = async ({ proposalId }: Props) => {
    
    const display = await prisma.engineerSurvey.findMany({
        where: { proposalId },
        include: {
            user: true,
            proposal: true
        }
    });

    if (!display || display.length === 0) {
        return <NotFoundPage />;
    }

    const survey = display[0];

    return (
        <div className="overflow-x-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold"><DisplayUserName/></h1>
                        <p className="py-6"><span>{survey.message} </span><span>You Must Pay</span> <span className='font-bold text-black'>{survey.payments} Birr</span></p>
                        <div className='flex justify-end'>
                            <Insurance proposalId={proposalId} />
                        </div>
                        <PaymentForm proposalId={proposalId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyDisplayUser;
