import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import Link from 'next/link';
import InsuranceSearch from '@/app/claimAdjuster/_comopnents/Search/ClaimSearch';

const Insurance = async ({searchParams}:{searchParams?:{
    query?:string;
    page?:number;
  }}) => {
    const query=searchParams?.query

    const display = await prisma.payment.findMany({
        where:{
      
            OR: [
              { lastName: { contains: query, lte: 'insensitive' } },
              { amount: { contains: query, lte: 'insensitive' } },
            ],
          },
        include: {
            user: true,
            proposal: true
        }
    });

    if (!display) return <NotFoundPage />;

    return (
        <div>
            <div>
                <InsuranceSearch/>
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
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.amount}</td>
                        <td>{item.proposal.kebele}</td>
                        <td>{item.proposal.woreda}</td>
                        <td>{item.proposal.branch}</td>
                        <td>{item.proposal.startDate}</td>
                        <td>{item.proposal.createdAt.toDateString()}</td>
                        <Link className='btn btn-primary'  href={`/insuranceOfficer/insuranceDetail/${item.id}/`}>Detail
                        </Link>
                    </tr>
                   
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Insurance;
