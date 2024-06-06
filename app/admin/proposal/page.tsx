import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/Auth';

const Proposal = async() => {
  const proposal=await prisma.proposal.findMany({
    orderBy:{'createdAt':'desc'},
    include:{
      user:true
    }
  })
  const session=await getServerSession(authOptions)

  if(session?.user.role !=='SURVEYENGINEER'){
 throw new Error("You Are not An admin")
  }

  else if(session.user.role ==='SURVEYENGINEER')
  return (
  <div className="overflow-x-auto">
 <table className="table">
           
 <thead>
      <th></th>
     <th>User FirstName</th>
     <th>User LastName</th>
     <th>FirstName</th>
     <th>LastName</th>
     <th>Model</th>
     <th>chassis No</th>

     <th>woreda</th>
     <th>kebele</th>
     <th>phoneNo</th>
     <th>Occupation</th>
     <th>start date</th>
     <th>end Date</th>
     <th>proposed Date</th>
     <th>Branch</th>
     <th>comprehensive</th>
                            <th>thirdParty </th>
                            <th>ondamage</th>
                            <th>thirdPartyFireAndTheft </th>
     <th>Created At</th>
  </thead>
  {proposal.map((proposals) =>(
 // eslint-disable-next-line react/jsx-key
 <tbody>
   <Link 
   className='hover:underline' 
   href={`/admin/proposal/${proposals.id}`}>
   <td key={proposals.id}>{proposals.id}</td>
   </Link>
   <td>{proposals.user?.firstName}</td>
   <td>{proposals.user?.lastName}</td>
   <td>{proposals.lastName}</td>
   <td>{proposals.firstName}</td>
   <td>{proposals.lastName}</td>
   <td>{proposals.model}</td>
   <td>{proposals.chassisNo}</td>

   <td>{proposals.woreda}</td>
   <td>{proposals.kebele}</td>
   <td>{proposals.phoneNo}</td>
   <td>{proposals.occupation}</td>
   <td>{proposals.startDate}</td>
   <td>{proposals.endDate}</td>
   <td>{proposals.proposedDate}</td>
   <td>{proposals.branch}</td>
   <td>
   </td>
   <td>{proposals.comprehensive ? 'Comprehensive' : ''}</td>
                            <td>{proposals.thirdParty ? 'Third Party' : ''}</td>
                            <td>{proposals.ondamage ? 'On Damage' : ''}</td>
                            <td>{proposals.thirdPartyFireAndTheft ? 'Third Party Fire And Theft' : ''}</td>
   <td>{proposals.createdAt.toDateString()}</td>
   </tbody>
  ))}
</table>
</div>
  )
}

export default Proposal

