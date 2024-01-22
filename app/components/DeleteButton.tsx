"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DeleteButton = ({ProposalId}:{ProposalId:number}) => {
    const [error,setError]=useState(false)
    const [isDeleting,setDelete]=useState(false)
    const router=useRouter()

    const handleDelete=async()=>{
        try {
         setDelete(true)
          await axios.delete('/api/proposal/'+ProposalId);
          router.push('/admin/proposal')
          router.refresh();
   
        } catch (error) {
         setError(true);
         setDelete(false);
        }
       }
    
  return (
    <div>
       
    {/* <Link href={`/admin/proposal/${ProposalId}/edit`} className='btn btn-primary'>Delete</Link> */}
    <button onClick={handleDelete} disabled={isDeleting} className='btn btn-secondary'>{isDeleting ? "Delete...":"Delete"}</button>
    </div>
  )
}

export default DeleteButton