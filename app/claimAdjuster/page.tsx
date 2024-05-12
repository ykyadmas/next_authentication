import { authOptions } from '@/lib/Auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const admin = async() => {
  
  const session=await getServerSession(authOptions)

  if(session?.user.role !=='ADMIN'){
    throw new Error("You Are not An admin")
  }
else if(session.user.role ==='ADMIN')
  return (
  <div>
  <p className='font-bold'>This is admin page</p>
  </div>
  )
}

export default admin