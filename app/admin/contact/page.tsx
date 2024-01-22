import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import ProposalStatus from '@/app/components/ProposalStatus';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[[...nextauth]]/route';

const Message = async() => {
  const message=await prisma.message.findMany()
  const session=await getServerSession(authOptions)


  if(session?.user.role !=='ADMIN'){
 throw new Error("You Are not An admin")
  }

  else if(session.user.role ==='ADMIN')
  return (
  <div className="overflow-x-auto">
 <table className="table">
           
 <thead>
      <th></th>
     <th>email of User</th>
     <th>subject</th>
     <th>sentMessage</th>
     <th></th>
  </thead>
  {message.map((messages) =>(
 <tbody>
   <Link 
   className='hover:underline' 
   href={`/admin/message/${messages.id}`}>
   <td key={messages.id}>{messages.id}</td>
   </Link>
   <td>{messages.emailMessage}</td>
   <td>{messages.subject}</td>
   <td>{messages.sentMessage}</td>
   
   <td>
   </td>
   {/* <td>{messages.createdAt.toDateString()}</td> */}
   </tbody>
  ))}
</table>
</div>
  )
}

export default Message

