import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma=new PrismaClient()

const ProposalCount = async() => {
  const display=await prisma.proposal.count()
  return (
    <div className=''>
        {
          display===0? (
            <p className='text-center font-bold'>No Proposal</p>
          )
          :(
            <div className="card w-96 bg-slate-300 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">{display} Proposals</h2>
            </div>
          </div>
          )
        }
    </div>
  )
}

export default ProposalCount