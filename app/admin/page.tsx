import { PrismaClient } from '@prisma/client'
import React from 'react'
import ProposalCount from './_comopnents/proposalCount/ProposalCout'

const prisma=new PrismaClient()

const Dashboard = async() => {
  const display=await prisma.user.count()
  return (
    <div className=''>
        {
          display===0? (
            <p className='text-center font-bold'>No User</p>
          )
          :(
           <div className='flex justify-between'>
             <div className="card w-96 bg-slate-300 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">{display} users</h2>
            </div>
          </div>
          <div className="card w-96 bg-slate-300 shadow-xl ">
            <div className="card-body">
              <ProposalCount/>
            </div>
          </div>
           </div>
          )
         
        }
    </div>
  )
}

export default Dashboard