"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import cancelSchema from '@/app/components/paymetValidation/cancelSchem'

interface Props{
  PaymentId:number,
}

const CancelForm = ({PaymentId}:Props) => {
 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {handleSubmit,register,formState:{isSubmitting}}=useForm({
    resolver:zodResolver(cancelSchema)
  })
  const handleForm=(handleSubmit(async(data)=>{
   try {
    await axios.post(`/api/cancelInsurance/`,{...data,PaymentId})
    router.push('/')
    router.refresh()
   } catch (error) {
    console.log(error)
   }
  }))
 
  return (
   <div>
    <form onSubmit={handleForm}>
 
<h1>policy cancellation</h1>
<label className="input input-bordered flex items-center gap-2">
 date  
<input 

 {...register('cancilationDate')} 
type="date" 
className="grow" 
placeholder="Acident Date" />
</label>
<label className="input input-bordered flex items-center gap-2">
Time
<input 
 {...register('cancilationTime')} 
type="time" 
className="grow" 
placeholder="Time" />
</label>
<label className="input input-bordered flex items-center gap-2">
Reason Of cancellation
<input 
 {...register('reason')} 
 
type="text" 
className="grow" 
placeholder="Write Your Reason" />
</label>
<button type='submit' className='btn btn-primary'>{isSubmitting ? "Submitting..." : "Submit"}</button>
    </form>
   </div>
  )
}

export default CancelForm


