import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { FileText } from 'lucide-react';
import { getServerSession } from 'next-auth';

interface Props{
    PaymentId:number
} 

const ClaimDisplay = async ({PaymentId}:Props) => {
  const session = await getServerSession();
  const claims = await prisma.claimForm.findMany({
    where: { PaymentId },
    include: {
        user: true,
        Payment: true
    }
});
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
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
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td>
                <Link className='hover:underline' href={`/myAccount/claim/${claim.id}`}>
                  {claim.id}
                </Link>
              </td>
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
                  <FileText className='mt-2' />
                  <span>View Car File</span>
                </Link>
              </td>
              <td>
                <Link
                  className="flex items-center space-x-3 text-purple-600"
                  target="_blank"
                  href={claim.policyFile}
                >
                  <FileText className='mt-2' />
                  <span>View Policy File</span>
                </Link>
              </td>
              <td>{claim.LicenceNo}</td>
              <td>{claim.time}</td>
              <td>{claim.createdAt?.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClaimDisplay;
