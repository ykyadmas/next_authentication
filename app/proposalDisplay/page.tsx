import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';


const ProposalDisplay = async () => {

  const session =await getServerSession();

  const proposals = await prisma.proposal.findMany({
    where: {
      userEmail: session?.user?.email,
    },
    orderBy: { createdAt: 'desc'},
    include: {
      user: true,
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>User FirstName</th>
            <th>User LastName</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Model</th>
            <th>woreda</th>
            <th>kebele</th>
            <th>phoneNo</th>
            <th>Occupation</th>
            <th>start date</th>
            <th>end Date</th>
            <th>proposed Date</th>
            <th>Branch</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal) => (
            <tr key={proposal.id}>
              <Link
                className="hover:underline"
                href={`/proposalDisplay/${proposal.id}`}
              >
                <td>{proposal.id}</td>
              </Link>
              <td>{proposal.user?.firstName}</td>
              <td>{proposal.user?.lastName}</td>
              <td>{proposal.lastName}</td>
              <td>{proposal.firstName}</td>
              <td>{proposal.lastName}</td>
              <td>{proposal.model}</td>
              <td>{proposal.woreda}</td>
              <td>{proposal.kebele}</td>
              <td>{proposal.phoneNo}</td>
              <td>{proposal.occupation}</td>
              <td>{proposal.startDate}</td>
              <td>{proposal.endDate}</td>
              <td>{proposal.proposedDate}</td>
              <td>{proposal.branch}</td>
              <td>{proposal.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProposalDisplay;