"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const DisplayUserName = () => {
    const {data:session}=useSession()
  return (
    <div>
        <p>Hello {session?.user.firstName}</p>
    </div>
  )
}

export default DisplayUserName