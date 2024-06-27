import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/Auth';
import ProposalSearch from '../_comopnents/Search/ProposalSearch';

const Proposal = async({searchParams}:{searchParams?:{
  query?:string;
  page?:number;
}}) => {
  const query=searchParams?.query
  const proposal=await prisma.proposal.findMany({
    where:{
      
      OR: [
        { phoneNo: { contains: query, lte: 'insensitive' } },
        { model: { contains: query, lte: 'insensitive' } },
        { chassisNo: { contains: query, lte: 'insensitive' } },
      ],
    },
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
    <ProposalSearch/>
 <table className="table">
           
 <thead>
      <th>Id</th>
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
   <td><Link 
   className='hover:underline' 
   href={`/admin/proposal/${proposals.id}`}  key={proposals.id}>
  {proposals.id}
   </Link></td>
   <td>{proposals.user?.firstName}</td>
   <td>{proposals.user?.lastName}</td>
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
   <td>{proposals.comprehensive ? 'Comprehensive' : 'none'}</td>
   <td>{proposals.thirdParty ? 'Third Party' : 'none'}</td>
   <td>{proposals.ondamage ? 'On Damage' : 'none'}</td>
   <td>{proposals.thirdPartyFireAndTheft ? 'Third Party Fire And Theft' : 'none'}</td>
   <td>{proposals.createdAt.toDateString()}</td>
   </tbody>
  ))}
</table>
</div>
  )
}

export default Proposal

