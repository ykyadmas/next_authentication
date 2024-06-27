"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

const DislayDashboard = () => {
    const{data:session}=useSession()
  return (
    <div>
        <p className='text-3xl'> Hello <span className='font-bold text-black'>{session?.user.firstName}</span> </p>
        <p className='text-3xl'>You can see your proposal and Insurance Here</p>
    </div>
  )
}

export default DislayDashboard