import React from 'react'
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';

interface Props{
    proposalId:number;
}

const Insurance = async({proposalId}:Props) => {

    const display=await prisma.payment.findFirst({
        where: {proposalId},
        include:{
            user:true,
            proposal:true
        }
    })
    if(!display) return <NotFoundPage/>
  
  return (
    <div>
    <div>
    <table className="table">
    <thead>
         <th></th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Amount</th>
        <th>kebele</th>
        <th>kebele</th>
        <th>woreda</th>
        <th>Branch</th>
        <th>Created</th>
        <th></th>
     </thead>
    <tbody>
      <td>{display.id}</td>
      <td>{display.firstName}</td>
      <td>{display.lastName}</td>
      <td>{display.amount}</td>
      <td>{display.proposal.kebele}</td>
      <td>{display.proposal.woreda}</td>
      <td>{display.proposal.branch}</td>
      <td>{display.proposal.startDate}</td>
      <td>{display.proposal.createdAt.toDateString()}</td>
      </tbody>
  </table>
    </div>
    <div>
      <p className='flex justify-center border-b text-xl font-bold'>Survey </p>
    </div>
    </div>
 ) 
}

export default Insurance