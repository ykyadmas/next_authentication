import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import EditButton from '../../_comopnents/ClaimEdit/EditButton'
import DeleteButton from '../../_comopnents/DeleteButton'

interface Props{
    params:{id:string}
}

const ProposalDetailPage = async({params}:Props) => {
const claim=await prisma.claimForm.findFirst({
    where:{id:parseInt(params.id)},
    include:{
      user:true,
    }
   
})    

if(!claim) 
notFound();
  return (
    <div>
      <div className="overflow-x-auto">
    <table className="table">
           
           <thead>
                <th>Id</th>
               <th>User FirstName</th>
               <th>User LastName</th>
               <th>Driver FullName</th>
               <th>Driver Occupation</th>
               <th>Driver Address</th>
               <th>Driver Age</th>
               <th>Accident Place</th>
               <th>Accident Date</th>
               <th>Car File</th>
               <th>Police File</th>
               <th>Licence Number</th>
               <th>Accident Time</th>
               <th>Claimed Time</th>
            </thead>
            <tbody>
   <Link 
   className='hover:underline' 
   href={`/claimAdjuster/claim/${claim.id}`}>
   <td key={claim.id}>{claim.id}</td>
   </Link>
   <td>{claim.user?.firstName}</td>
   <td>{claim.user?.lastName}</td>
   <td>{claim.driverFullName}</td>
   <td>{claim.driverOccupation}</td>
   <td>{claim.driverAddress}</td>
   <td>{claim.age}</td>
   <td>{claim.place}</td>
   <td>{claim.acidentDate}</td>
   <td>  
    <Link
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={claim.carFile}
      >
        <FileText className='mt-2'/>
        <span>View Policy File</span>
      </Link></td>
      <td>  
    <Link
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={claim.policyFile}
      >
        <FileText className='mt-2'/>
        <span>View Policy File</span>
      </Link></td>
   <td>{claim.LicenceNo}</td>
   <td>{claim.time}</td>
   <td>{claim.createdAt?.toDateString()}</td>
   </tbody>
</table>
</div>

      <td><EditButton ClaimId={claim.id} /></td> 
      <td><DeleteButton ClaimId={claim.id}/></td> 
      {/* </tbody> */}
  {/* </table> */}

    <div>
      <p className='flex justify-center border-b text-xl font-bold'>Survey </p>
    {/* <SurveyDisplay proposalId={parseInt(params.id)}/>
    <EngineersForm proposalId={parseInt(params.id)}/> */}
    </div>
    </div>
    
  )
}

export default ProposalDetailPage