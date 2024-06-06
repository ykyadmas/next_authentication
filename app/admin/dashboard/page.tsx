import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma=new PrismaClient()

const Dashboard = async() => {
  const display=await prisma.user.count()
  return (
    <div className=''>
        {
          display===0?
          <p className='text-center font-bold'>No User</p>
          :
          <p className='text-center font-bold'>{display} User</p>
        }
    </div>
  )
}

export default Dashboard