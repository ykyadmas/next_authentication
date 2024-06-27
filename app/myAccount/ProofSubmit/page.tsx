import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

const Insurance = async () => {
    const session =await getServerSession();
    const display = await prisma.payment.findMany({
        where: {
            userEmail: session?.user?.email,
          },
        include: {
            user: true,
            proposal: true,
            InsuranceApproves:true,
        }
    });

    if (!display) return <NotFoundPage />;

    return (
    <div className="overflow-x-auto">
    <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <td>Amount</td>
                            <td>Chassi No</td>
                            <th>Kebele</th>
                            <th>Woreda</th>
                            <th>Branch</th>
                            <th>StartDate</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {display.map((item)=>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.amount}</td>
                        <td>{item.proposal.chassisNo}</td>
                        <td>{item.proposal.kebele}</td>
                        <td>{item.proposal.woreda}</td>
                        <td>{item.proposal.branch}</td>
                        <td>{item.proposal.startDate}</td>
                        <td>{item.proposal.endDate}</td>

                        <Link className='btn btn-primary'  href={`/myAccount/ProofSubmit/${item.id}/`}>Detail
                        </Link>
                    </tr>
                   
                        ))}
                        
                    </tbody>
                </table>
            </div>
    );
};

export default Insurance;
