"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { CreateProposalSchema } from '../validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type ProposalForm=z.infer<typeof CreateProposalSchema>

const ProposalSubmit = () => {
    const router=useRouter();
    const {register,handleSubmit,formState:{errors}}=useForm<ProposalForm>({
      resolver:zodResolver(CreateProposalSchema)
    });
    const [error,setError]=useState('');
    return (
    <div> 
    {error && <div role="alert" className="alert alert-error w-80 mt-16 ml-64">
  <span>{error}</span>
</div>
}
        <form 

        className='flex flex-col ml-72 mt-32 gap-4' 
        onSubmit={handleSubmit(async (data)=>{

            try {
            await axios.post('/api/proposal',data);
            router.push('/ProofSubmit');
                
            } catch (error) {
                setError("An expected error occurred.");
            }
            
            })}>
        <input  
        {...register('firstName')}
        type="text"
         placeholder="Enter your firstName" 
         className="input input-bordered input-secondary w-full max-w-xs" />
         {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
        <input 
     {...register('lastName')}
        type="text"
         placeholder="Enter your lastName" 
         className="input input-bordered input-secondary w-full max-w-xs" />
        {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
         <input 
        {...register('model')}
         type="text"
         placeholder="Type Your Car Model" 
         className="input input-bordered input-secondary w-full max-w-xs" />
        {errors.model && <p className='text-red-500'>{errors.model.message}</p>}
         <button type="submit" className='btn btn-neutral w-full max-w-xs'>Submit Proposal</button>
        </form>
    </div>
  )
}

export default ProposalSubmit
