"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClaimSchema from './ClaimSchema'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FileText } from 'lucide-react'
import { UploadDropzone } from '@/app/utils/uploadthing'

interface Props{
  PaymentId:number
}

const ClaimForm = ({PaymentId}:Props) => {
  const[policyFile,setPolicyFile]=useState<null | string>(null)
  const[carFile,setCarFile]=useState<null | string>(null)

 

  const router=useRouter()
  const {handleSubmit,register,formState:{errors,isSubmitting}}=useForm({
    resolver:zodResolver(ClaimSchema)
  })
  const handleForm=(handleSubmit(async(data)=>{
   try {
    await axios.post('/api/claim/',{...data,PaymentId,policyFile,carFile})
    router.push('/ProofSubmit')
    router.refresh()
   } catch (error) {
    console.log(error)
   }
  }))
 
  return (
   <div>
    <form onSubmit={handleForm}>
    <h1>Driver</h1>
    <label className="input input-bordered flex items-center gap-2">
  Driver FullName 
  <input 
    {...register('driverFullName')}
  type="text" 
  className="grow" placeholder="Driver FullName" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Address
  <input
  {...register('driverAddress')} 
  type="text" 
  className="grow" 
  placeholder="Address" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Occupation
  <input 
    {...register('driverOccupation')} 
  type="text" 
  className="grow" 
  placeholder="Occupation" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Age
  <input 
    {...register('age')} 
  type="text" 
  className="grow" 
  placeholder="Age" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Licence No
  <input 
  {...register('LicenceNo')} 
  type="text" 
  className="grow" 
  placeholder="Licence No" />
</label>
<h1>Detail of Acciedent</h1>
<label className="input input-bordered flex items-center gap-2">
Acident Date  
<input 
 {...register('acidentDate')} 
type="date" 
className="grow" 
placeholder="Acident Date" />
</label>
<label className="input input-bordered flex items-center gap-2">
Time
<input 
 {...register('time')} 
type="date" 
className="grow" 
placeholder="Time" />
</label>
<label className="input input-bordered flex items-center gap-2">
Place
<input 
 {...register('place')} 
type="text" 
className="grow" 
placeholder="Place" />
</label>
<input 
  type="hidden" 
  {...register('policyFile')}
  name='policyFile'
 />

 <h1>Policy File</h1>
<div>
       {policyFile === null ? (
         <UploadDropzone endpoint='pdfUploader'
         onClientUploadComplete={(res)=>{
          setPolicyFile(res[0].url)
         }}
         onUploadError={()=>{
          alert("Error");
         }}
         />
       ):(
        <a
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={policyFile}
      >
        <FileText />
        <span>View PDF</span>
      </a>
         )}
      </div>
      <input 
  type="hidden" 
  {...register('carFile')}
  name='carFile'
 />

<h1>Car File After Accident Occured</h1>

<div>
       {carFile === null ? (
         <UploadDropzone endpoint='pdfUploader'
         onClientUploadComplete={(res)=>{
          setCarFile(res[0].url)
         }}
         onUploadError={()=>{
          alert("Error");
         }}
         />
       ):(
        <a
        className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={carFile}
      >
        <FileText />
        <span>View PDF</span>
      </a>
         )}
      </div>
<button type='submit' className='btn btn-primary'>{isSubmitting ? "Submitting claim..." : "Submit claim"}</button>
    </form>
   </div>
  )
}

export default ClaimForm


