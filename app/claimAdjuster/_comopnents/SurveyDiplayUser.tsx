import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from './NotFoundPage';
import PaymentForm from '@/app/components/PaymentForm/paymentForm';
import Insurance from '@/app/components/Insurance/Insurance';

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

    if (!display || display.length === 0) return <NotFoundPage/>;

    const survey = display[0];

    if (survey) {
        return (
            <div className="overflow-x-auto">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello {survey.user.firstName}</h1>
                            <p className="py-6">Your Proposal is Approved and you will pay <span className='text-green-400'>{survey.payments}</span></p>
                            <div className='flex justify-end'>
                            <Insurance proposalId={proposalId} />
                            </div>
                            <PaymentForm proposalId={proposalId}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    }

    // If there's no insurance, display only payment form
  

export default SurveyDisplayUser;
