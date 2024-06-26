"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FileText } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import PaymentSchema from '@/app/components/paymetValidation/PaymentSchema'
import { UploadDropzone } from '@/app/utils/uploadthing'
import toast from 'react-hot-toast'
import { Payment } from '@prisma/client'

interface Props{
  proposalId:number,
  payment:Payment
}


const PaymentForm = ({proposalId,payment}:Props) =>{
  const {data:session}=useSession()
  const router=useRouter()
  const[receipt,setReceiptUrl]=useState<null|string>(payment?.receipt || null)

  const {register,handleSubmit,formState:{errors,isSubmitting},setValue}=useForm({
    resolver: zodResolver(PaymentSchema),
    defaultValues: payment
  })

  const onSubmitHandler=(handleSubmit(async(data)=>{
      try {
        if(payment)
        await axios.patch('/api/payment/'+payment.id,{...data,receipt,proposalId})
              router.push(`/insuranceOfficer/insuranceDetail/${payment.id}`)
              router.refresh()
              toast.success("your payment has been Updated")
              } catch (error) {
                toast.error("you Have Already An Insurance")
                 console.error(error)
      }
    
  }))
  useEffect(() => {
  setValue('receipt', receipt as string);
 }, [receipt, setValue]);
  return (
    <div className='flex justify-between'>
     <form onSubmit={onSubmitHandler}>
     <div>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Title</span>
  </div>
  <input 
  type="hidden" 
  {...register('receipt')}
  name='receipt'
 />
  <input 
  type="text" 
  {...register('firstName')}
  placeholder="your first Name" 
  className="input input-bordered w-full max-w-xs" />
   <input 
  type="text" 
  {...register('lastName')}
  placeholder="write your last Name" 
  className="input input-bordered w-full max-w-xs" 
  />
  <input 
  type="number" 
  {...register('amount')}
  placeholder="Amount" 
  className="input input-bordered w-full max-w-xs" 
  /> 
</label>
      </div>
      <div>
       {receipt === null ? (
         <UploadDropzone endpoint='pdfUploader'
         onClientUploadComplete={(res)=>{
          setReceiptUrl(res[0].url)
         }}
         onUploadError={()=>{
          alert("Error");
         }}
         />
       ):(
        <a
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={receipt}
      >
        <FileText />
        <span>View PDF</span>
      </a>
         )}
      </div>
      {session && session.user ? (
        <button 
        type='submit' 
        className="btn border-orange-800">{isSubmitting ? "Updating..." : "Update"}</button>
      ):(
        <Link className='btn btn-primary' href="/api/auth/signin/">Signin</Link>
      )}
     </form>
<div>
</div>
    </div>
  )
}

export default PaymentForm