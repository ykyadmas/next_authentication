"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { validationSchema } from '../validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Proposal } from '@prisma/client';

type ProposalForm=z.infer<typeof validationSchema>



const ProposalSubmit = () => {
    const router=useRouter();
    const {register,handleSubmit,formState:{errors ,isSubmitting}}=useForm<ProposalForm>({
      resolver:zodResolver(validationSchema)
    });
    
    const onSubmitProposal=handleSubmit(async (data)=>{

      try {
      await axios.post('/api/proposal',data);
      router.push('/ProofSubmit');
      router.refresh();          
      } catch (error) {
          setError("An expected error occurred.");
      }
      })

    const [error,setError]=useState('');
    return (
    <div> 
    {error && <div role="alert" className="alert alert-error w-80 mt-16 ml-64">
  <span>{error}</span>
</div>
}
 <form 
        className='flex flex-col ml-72 mt-32 gap-4' 
        onSubmit={onSubmitProposal}>
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
        {...register('woreda')}
         type="text"
         placeholder="Write Your Address/Woreda" 

         className="input input-bordered input-secondary w-full max-w-xs" />
{errors.woreda && <p className='text-red-500'>{errors.woreda.message}</p>}

  <input 
        {...register('kebele')}
         type="text"
         placeholder="Write Your Address/Kebele" 

         className="input input-bordered input-secondary w-full max-w-xs" />
           <input 
        {...register('phoneNo')}
         type="text"
         placeholder="Write Your Phone Number with +251" 

         className="input input-bordered input-secondary w-full max-w-xs" />
           <input 
        {...register('occupation')}
         type="text"
         placeholder="Write Your Job/Occupation" 

         className="input input-bordered input-secondary w-full max-w-xs" />

<input 
        {...register('startDate')}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />

<input 
        {...register('endDate')}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />
         
<input 
        {...register('model')}
         type="text"
         placeholder="Type Your Car Model" 

         className="input input-bordered input-secondary w-full max-w-xs" />

<input 
        {...register('proposedDate')}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />
           <input 
        {...register('branch')}
         type="text"
         placeholder="Write Branch" 

         className="input input-bordered input-secondary w-full max-w-xs" />

        {errors.model && <p className='text-red-500'>{errors.model.message}</p>}
         <button 
         type="submit" 
         className='btn btn-neutral w-full max-w-xs'
         disabled={isSubmitting}
         >{isSubmitting ? "Submit Proposal...":"Submit"}</button>
        </form>
    </div>
  )
}

export default ProposalSubmit
