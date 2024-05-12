import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import DownloadButton from '../handleDownload';
import Modal from '@/app/components/ClaimForm/Modal';

interface Props {
    params:{id:string}
}

const Insurance = async ({ params }: Props) => {
    const display = await prisma.payment.findFirst({
        where:{id:parseInt(params.id)},
        include: {
            user: true,
            proposal: true
        }
    });

    if (!display) return <NotFoundPage />;

    return (
        <div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <td>Amount</td>
                            <th>Kebele</th>
                            <th>Woreda</th>
                            <th>Branch</th>
                            <th>StartDate</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{display.id}</td>
                            <td>{display.firstName}</td>
                            <td>{display.lastName}</td>
                            <td>{display.amount}</td>
                            <td>{display.proposal.kebele}</td>
                            <td>{display.proposal.woreda}</td>
                            <td>{display.proposal.branch}</td>
                            <td>{display.proposal.startDate}</td>
                            <td>{display.proposal.createdAt.toDateString()}</td>
                        </tr>
                    </tbody>
                </table>
                <DownloadButton display={display} />
                 <Modal PaymentId={parseInt(params.id)}/>

            </div>
        </div>
    );
};

export default Insurance;
