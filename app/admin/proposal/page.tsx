import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import ProposalStatus from '@/app/components/ProposalStatus';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[[...nextauth]]/route';

const Proposal = async() => {
  const proposal=await prisma.proposal.findMany()
  const session=await getServerSession(authOptions)


  if(session?.user.role !=='ADMIN'){
 throw new Error("You Are not An admin")
  }

  else if(session.user.role ==='ADMIN')
  return (
  <div className="overflow-x-auto">
 <table className="table">
           
 <thead>
      <th></th>
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
     <th>Status</th>
     <th>Created At</th>
  </thead>
  {proposal.map((proposals) =>(
 <tbody>
   <Link 
   className='hover:underline' 
   href={`/admin/proposal/${proposals.id}`}>
   <td key={proposals.id}>{proposals.id}</td>
   </Link>
   <td>{proposals.firstName}</td>
   <td>{proposals.lastName}</td>
   <td>{proposals.model}</td>
   <td>{proposals.woreda}</td>
   <td>{proposals.kebele}</td>
   <td>{proposals.phoneNo}</td>
   <td>{proposals.occupation}</td>
   <td>{proposals.startDate}</td>
   <td>{proposals.endDate}</td>
   <td>{proposals.proposedDate}</td>
   <td>{proposals.branch}</td>
   <td>
   <ProposalStatus status={proposals.status}/>
   </td>
   <td>{proposals.createdAt.toDateString()}</td>
   </tbody>
  ))}
</table>
</div>
  )
}

export default Proposal

