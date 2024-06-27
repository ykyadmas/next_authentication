import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const Proposal = async() => {

  const display=await prisma.message.findMany({
   
    orderBy:{'createdAt':'desc'},
    include:{
      user:true,
    }
  })

  return (
  <div className="overflow-x-auto">
 <table className="table">
 <thead>
      <th>Id</th>
     <th>User FirstName</th>
     <th>User LastName</th>
     <th>Message</th>
     <th>Subject</th>
  </thead>
  {display.map((items) =>(
 // eslint-disable-next-line react/jsx-key
 <tbody>
   <Link 
   className='hover:underline' 
   href={`/claimAdjuster/claim/${items.id}`}>
   <td key={items.id}>{items.id}</td>
   </Link>
   <td>{items.user?.firstName}</td>
   <td>{items.user?.lastName}</td>
   <td>{items.sentMessage}</td>
   <td>{items.subject}</td>
    
   
   </tbody>
  ))}
</table>
</div>
  )
}

export default Proposal

