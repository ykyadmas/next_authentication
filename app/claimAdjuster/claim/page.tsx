import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { FileText } from 'lucide-react';

const Proposal = async() => {
  const claim=await prisma.claimForm.findMany({
    orderBy:{'createdAt':'desc'},
    include:{
      user:true,
      Payment:true
    }
  })

  return (
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
  {claim.map((claims) =>(
 // eslint-disable-next-line react/jsx-key
 <tbody>
   <Link 
   className='hover:underline' 
   href={`/claimAdjuster/claim/${claims.id}`}>
   <td key={claims.id}>{claims.id}</td>
   </Link>
   <td>{claims.user?.firstName}</td>
   <td>{claims.user?.lastName}</td>
   <td>{claims.driverFullName}</td>
   <td>{claims.driverOccupation}</td>
   <td>{claims.driverAddress}</td>
   <td>{claims.age}</td>
   <td>{claims.place}</td>
   <td>{claims.acidentDate}</td>
   <td>  
    <Link
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={claims.carFile}
      >
        <FileText className='mt-2'/>
        <span>View Policy File</span>
      </Link></td>
      <td>  
    <Link
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={claims.policyFile}
      >
        <FileText className='mt-2'/>
        <span>View Policy File</span>
      </Link></td>
   <td>{claims.LicenceNo}</td>
   <td>{claims.time}</td>
   <td>{claims.createdAt?.toDateString()}</td>
   </tbody>
  ))}
</table>
</div>
  )
}

export default Proposal

