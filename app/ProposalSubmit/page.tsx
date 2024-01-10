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



const ProposalSubmit = ({proposal}:{proposal:Proposal}) => {
    const router=useRouter();
    const {register,handleSubmit,formState:{errors ,isSubmitting}}=useForm<ProposalForm>({
      resolver:zodResolver(validationSchema)
    });
    
    const onSubmitProposal=handleSubmit(async (data)=>{

      try {
        if(proposal)
        axios.patch('/api/proposal/'+proposal.id,data)
      else
      await axios.post('/api/proposal',data);
      router.push('/ProofSubmit');
          
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
        defaultValue={proposal?.firstName}
        type="text"
         placeholder="Enter your firstName" 
         className="input input-bordered input-secondary w-full max-w-xs" />
         {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
        <input 
     {...register('lastName')}
     defaultValue={proposal?.lastName}

        type="text"
         placeholder="Enter your lastName" 
         className="input input-bordered input-secondary w-full max-w-xs" />
        {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
         <input 
        {...register('model')}
         type="text"
         placeholder="Type Your Car Model" 
         defaultValue={proposal?.model}

         className="input input-bordered input-secondary w-full max-w-xs" />
        {errors.model && <p className='text-red-500'>{errors.model.message}</p>}
         <button 
         type="submit" 
         className='btn btn-neutral w-full max-w-xs'
         disabled={isSubmitting}
         >{proposal ? 'Update Proposal' : 'Submit Proposal'}{isSubmitting ? "Submit Proposal...":"Submit"}</button>
        </form>
    </div>
  )
}

export default ProposalSubmit
