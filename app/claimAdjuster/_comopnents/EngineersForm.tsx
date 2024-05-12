"use client"
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import EngineersSchema from '../_lib/EnginersSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props{
  proposalId:number
}

const EngineersForm = ({proposalId}:Props) => {

  const router=useRouter()
  const{handleSubmit,register,formState:{errors,isSubmitting}}=useForm({
    resolver:zodResolver(EngineersSchema),
    })

    const handleOnSubmit=(handleSubmit(async(data)=>{
      try {
        await axios.post('/api/engineer/', {...data,proposalId})
        console.log(data)
        router.push('/admin') 
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
          type="number"
          {...register('payments')}
          placeholder="Enter The Payment in nubmer"
          className="input input-bordered w-full max-w-xs"
        />
              <button 
               className='btn border-t-orange-500' type="submit">{isSubmitting ? "Submitting..." : "Submit"}</button>
        </form>
      </div>
    );
  };
export default EngineersForm