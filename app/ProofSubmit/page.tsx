import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import ProposalStatus from '@/app/components/ProposalStatus';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[[...nextauth]]/route';

const Proposal = async() => {
  const proposal=await prisma.proposal.findMany()
 

  return (

  
 <div>
  your status is 
{proposal.map((proposals) =>(
   <>
   <Link
      className='hover:underline'
      href={`/admin/proposal/${proposals.id}`}>
      <td key={proposals.id}>{proposals.id}</td>
    </Link><ProposalStatus status={proposals.status} /></>

  ))}
 </div>
  )
}

export default Proposal

