"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const DeleteButton = ({PaymentId}:{PaymentId:number}) => {

    const[isDeleting,setDeleting]=useState(false)
    const[error,setError]=useState(false)

    const router=useRouter()
    const handleDelete=async()=>{
        try {
            setDeleting(true)
            await axios.delete('/api/payment/'+PaymentId);
                  router.push('/insuranceOfficer/insuranceDetail/')
                  router.refresh()
                  router.refresh()
        } catch (error) {
            setError(true)
            setDeleting(false)
        }
    }

  return (
    <div>
        <button onClick={handleDelete} type='submit' className='btn btn-success'>{isDeleting ? "Deleting..." : "Delete"}</button>
    </div>
  )
}

export default DeleteButton