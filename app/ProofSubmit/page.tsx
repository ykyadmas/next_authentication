import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import Link from 'next/link';

const Insurance = async () => {
    const display = await prisma.payment.findMany({
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
                        {display.map((item)=>(
                        <Link key={item.id} href={`/ProofSubmit/${item.id}/`}>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.amount}</td>
                        <td>{item.proposal.kebele}</td>
                        <td>{item.proposal.woreda}</td>
                        <td>{item.proposal.branch}</td>
                        <td>{item.proposal.startDate}</td>
                        <td>{item.proposal.createdAt.toDateString()}</td>
                    </tr>
                    </Link>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Insurance;
