import EditButton from '@/app/components/EditButton'
import DeleteButton from '@/app/components/DeleteButton'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'
import EngineersForm from '../../_comopnents/EngineersForm'
import SurveyDisplay from '../../_comopnents/SurveyDisplay'

interface Props{
    params:{id:string}
}

const ProposalDetailPage = async({params}:Props) => {
const proposal=await prisma.proposal.findFirst({
    where:{id:parseInt(params.id)},
    include:{
      user:true,
    }
   
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
        <th>woreda</th>
        <th>kebele</th>
        <th>phoneNo</th>
        <th>Occupation</th>
        <th>start date</th>
        <th>end Date</th>
        <th>proposed Date</th>
        <th>Branch</th>
        <th>Created</th>
        <th></th>
     </thead>
    <tbody>
      <td>{proposal.id}</td>
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
      <td><EditButton ProposalId={proposal.id}/></td>
      <td><DeleteButton ProposalId={proposal.id}/></td>
      </tbody>
  </table>
    </div>
    <div>
      <p className='flex justify-center border-b text-xl font-bold'>Survey </p>
    <SurveyDisplay proposalId={parseInt(params.id)}/>
    <EngineersForm proposalId={parseInt(params.id)}/>
    </div>
    </div>
  )
}

export default ProposalDetailPage