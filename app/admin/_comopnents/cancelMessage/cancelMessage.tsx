"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import cancelMessageSchema from '@/app/components/paymetValidation/cancelationMessage'

interface Props{
  PaymentId:number,
}

const CancelMessageForm = ({PaymentId}:Props) => {
 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {handleSubmit,register,formState:{isSubmitting}}=useForm({
    resolver:zodResolver(cancelMessageSchema)
  })
  const handleForm=(handleSubmit(async(data)=>{
   try {
    await axios.post(`/api/cancelationMessage/`,{...data,PaymentId})
    router.push('/')
    router.refresh()
   } catch (error) {
    console.log(error)
   }
  }))
 
  return (
   <div>
    <form onSubmit={handleForm}>
 
<label className="input input-bordered flex items-center gap-2">
Message   
<input 

 {...register('message')} 
type="text" 
className="grow" 
placeholder="Message" />
</label>

<button type='submit' className='btn btn-primary'>{isSubmitting ? "Submitting..." : "Submit"}</button>
    </form>
   </div>
  )
}

export default CancelMessageForm


