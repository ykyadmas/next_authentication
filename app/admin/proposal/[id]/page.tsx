import ProposalStatus from '@/app/components/ProposalStatus'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props{
    params:{id:string}
}

const ProposalDetailPage = async({params}:Props) => {
const proposal=await prisma.proposal.findUnique({
    where:{id:parseInt(params.id)}
})    

if(!proposal) 
notFound();
  return (
    <div>
      <p className='font-bold'>{proposal.firstName}</p>
      <p>{proposal.lastName}</p>
      <p>{proposal.model}</p>
      <p><ProposalStatus status={proposal.status}/></p>
      <p>{proposal.createdAt.toDateString()}</p>
    </div>
  )
}

export default ProposalDetailPage