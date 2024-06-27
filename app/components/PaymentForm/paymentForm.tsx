"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FileText } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import PaymentSchema from '@/app/components/paymetValidation/PaymentSchema'
import { UploadDropzone } from '@/app/utils/uploadthing'
import toast from 'react-hot-toast'

interface Props {
  proposalId: number
}

const PaymentForm = ({ proposalId }: Props) => {
  const { data: session } = useSession()
  const router = useRouter()
  const [receipt, setReceiptUrl] = useState<null | string>(null)

  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    resolver: zodResolver(PaymentSchema)
  })

  const onSubmitHandler = handleSubmit(async (data) => {
    try {
      await axios.post('/api/payment/', { ...data, receipt, proposalId })
      router.push('/')
      router.refresh()
      toast.success("Your payment has been submitted")
    } catch (error) {
      toast.error("You have already an insurance")
      console.error(error)
    }
  })

  return (
    <div className='flex flex-col items-center p-4 md:flex-row md:justify-between md:p-8 overflow-x-auto'>
      <form onSubmit={onSubmitHandler} className="w-full max-w-lg">
        <div className="form-control w-full">
          <div className="label">
            <span className="label-text">
              Use Your <span className='font-bold'>FirstName</span> And <span className='font-bold'>LastName</span> You Used For Proposal Form Upload Your Payment <span className='font-bold'></span>
            </span>
          </div>
          <input 
            type="hidden" 
            {...register('receipt')}
            name='receipt'
          />
          <input 
            type="text" 
            {...register('firstName')}
            placeholder="Your first name" 
            className="input input-bordered mb-4 w-full"
          />
          <input 
            type="text" 
            {...register('lastName')}
            placeholder="Your last name" 
            className="input input-bordered mb-4 w-full" 
          />
          <input 
            type="number" 
            {...register('amount')}
            placeholder="Amount" 
            className="input input-bordered mb-4 w-full" 
          /> 
        </div>
        <div className="mb-4">
          {receipt === null ? (
            <UploadDropzone 
              endpoint='pdfUploader'
              onClientUploadComplete={(res) => {
                setReceiptUrl(res[0].url)
              }}
              onUploadError={() => {
                alert("Error");
              }}
            />
          ) : (
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
            className="btn w-full border-orange-800">{isSubmitting ? "Submitting..." : "Submit"}</button>
        ) : (
          <Link className='btn btn-primary w-full' href="/api/auth/signin/">Signin</Link>
        )}
      </form>
    </div>
  )
}

export default PaymentForm
