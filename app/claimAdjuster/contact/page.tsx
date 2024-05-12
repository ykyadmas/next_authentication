import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const Message = async() => {
  const message=await prisma.message.findMany({
    orderBy:{
      'createdAt':'desc'
    },
    include:{
      user:true
    }
  })
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
 // eslint-disable-next-line react/jsx-key
 <tbody>
   <Link 
   className='hover:underline' 
   href={`/admin/message/${messages.id}`}>
   <td key={messages.id}>{messages.id}</td>
   </Link>
   <td>{messages.user?.firstName}</td>
   <td>{messages.user?.lastName}</td>
   <td>{messages.user?.email}</td>
   <td>{messages.subject}</td>
   <td>{messages.sentMessage}</td>
   
   <td>{}</td>
   
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

