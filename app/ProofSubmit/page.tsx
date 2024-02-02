import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import ProposalStatus from '@/app/components/ProposalStatus';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[[...nextauth]]/route';

const Proposal = async() => {
  const proposal=await prisma.proposal.findMany()
 

  return (

 <div className='grid grid-rows-2 justify-center  p-32 bg-gradient-to-b from-gray-100 to-slate-100 via-slate-100 h-screen'>
<div>
<p className='font-bold text-3xl'>Proposal Submitted successfully: </p>
<p className='font-bold ml-24 text-3xl'>your status is </p>

</div>

<div className='ml-48'>
{proposal.map((proposals) =>(
   <>
   <Link
      className='hover:underline'
      href={`/admin/proposal/${proposals.id}`}>
    </Link><ProposalStatus status={proposals.status} />
    </>

  ))}
</div>

 </div>
  )
}

export default Proposal

