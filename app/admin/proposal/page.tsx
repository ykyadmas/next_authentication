import { prisma } from '@/lib/prisma'
import React from 'react'

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
    <td>{proposals.id}</td>
      <td>{proposals.firstName}</td>
      <td>{proposals.lastName}</td>
      <td>{proposals.model}</td>
      <td>{proposals.status}</td>
      <td>{proposals.createdAt.toDateString()}</td>
      </tbody>

     ))}
  </table>
</div>
  )
}

export default Proposal