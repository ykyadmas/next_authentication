"use client"
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DeleteButton = ({ProposalId}:{ProposalId:number}) => {
    const router=useRouter()
  return (
    <div>
       
    {/* <Link href={`/admin/proposal/${ProposalId}/edit`} className='btn btn-primary'>Delete</Link> */}
    <button onClick={async()=>{
        await axios.delete('/api/proposal/'+ProposalId);
        router.push('/admin/proposal')
        router.refresh();
    }} className='btn btn-secondary'>Delete</button>
    </div>
  )
}

export default DeleteButton