"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { UploadDropzone } from '@/app/utils/uploadthing'
import { FileText } from 'lucide-react'
import DamageSchema from './lib/DamageSchema'

interface Props{
  claimId:number
}

const DamageEvaluatorForm = ({claimId}:Props) => {

  const[file,setUploadFile]=useState<null | string>(null)

  const router=useRouter()
  const{handleSubmit,register,formState:{errors,isSubmitting}}=useForm({
    resolver:zodResolver(DamageSchema),
    })

    const handleOnSubmit=(handleSubmit(async(data)=>{
      try {
        await axios.post('/api/damageEvaluator/', {...data,file,claimId})
        console.log(data)
        router.push('/damageEvaluator/') 
        router.refresh()  
      } catch (error) {
        console.log(error)
      }    
    }))
    return (
      <div>
        <form className="flex w-full flex-col gap-3" onSubmit={handleOnSubmit}>
        <input
          type="text"
          {...register('firstName')}
          placeholder="firstName"
          className="input input-bordered w-full max-w-xs"
        />
        
         <input
          type="text"
          {...register('lastName')}
          placeholder="lastName"
          className="input input-bordered w-full max-w-xs"
        />
         <input
          type="text"
          {...register('message')}
          placeholder="message"
          className="input input-bordered w-full max-w-xs"
        />
          <input
          type="hidden"
          {...register('file')}
          placeholder="Enter The Payment in nubmer"
          className="input input-bordered w-full max-w-xs"
        />
        <h1>Policy File</h1>
<div>
       {file === null ? (
         <UploadDropzone endpoint='pdfUploader'
         onClientUploadComplete={(res)=>{
          setUploadFile(res[0].url)
         }}
         onUploadError={()=>{
          alert("Error");
         }}
         />
       ):(
        <a
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={file}
      >
        <FileText />
        <span>View PDF</span>
      </a>
         )}
      </div>
              <button 
               className='btn border-t-orange-500' type="submit">{isSubmitting ? "Submitting..." : "Submit"}</button>
        </form>
      </div>
    );
  };
export default DamageEvaluatorForm