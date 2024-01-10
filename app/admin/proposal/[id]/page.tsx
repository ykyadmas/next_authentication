import EditButton from '@/app/components/EditButton'
import ProposalStatus from '@/app/components/ProposalStatus'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
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
    <div>
    <table className="table">
    <thead>
         <th></th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Model</th>
        <th>Status</th>
        <th>Created</th>
        <th></th>
     </thead>
    <tbody>
      <td>{proposal.id}</td>
      <td>{proposal.firstName}</td>
      <td>{proposal.lastName}</td>
      <td>{proposal.model}</td>
      <td><ProposalStatus status={proposal.status}/></td>
      <td>{proposal.createdAt.toDateString()}</td>
      <td><EditButton ProposalId={proposal.id}/></td>

      </tbody>
  </table>
    </div>
    <div>
      
    </div>
    </div>
  )
}

export default ProposalDetailPage