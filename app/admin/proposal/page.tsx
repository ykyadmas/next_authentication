import ProposalStatus from '@/app/components/ProposalStatus'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Proposal = async() => {
  
  const proposal=await prisma.proposal.findMany()
  return (
    <div className="overflow-x-auto">
  <table className="table">
    <thead>
         <th></th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Model</th>
        <th>Status</th>
        <th>Created</th>
    </thead>
     {proposal.map((proposals) =>(
    <tbody>
      <Link className='hover:underline' href={`/admin/proposal/${proposals.id}`}>
        
      <td key={proposals.id}>{proposals.id}</td>
      </Link>
      <td>{proposals.firstName}</td>
      <td>{proposals.lastName}</td>
      <td>{proposals.model}</td>
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