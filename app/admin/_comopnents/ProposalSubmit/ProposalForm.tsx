"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { validationSchema } from '@/app/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Proposal } from '@prisma/client';

type ProposalForm=z.infer<typeof validationSchema>



const ProposalForm = ({proposal}:{proposal:Proposal}) => {
    const router=useRouter();
    const {register,handleSubmit,formState:{errors ,isSubmitting}}=useForm<ProposalForm>({
      resolver:zodResolver(validationSchema)
    });
    const [checkboxes, setCheckboxes] = useState({
      comprehensive: false,
      thirdParty: false,
      thirdPartyFireAndTheft: false,
      ondamage: false
    });
    const handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
      const { name, checked } = event.target;
      setCheckboxes((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };

    
    const onSubmitProposal=handleSubmit(async (data)=>{
      try {
        if(proposal)
        axios.patch('/api/proposal/'+proposal.id,data)
        router.push(`/admin/proposal/${proposal.id}`);
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
        
        <label className='ml-16'>Woreda:</label> 
         <input 
        {...register('woreda')}
        defaultValue={proposal?.woreda}

         type="text"
         placeholder="Write Your Address/Woreda" 
         className="input input-bordered input-secondary w-full max-w-xs" />
{errors.woreda && <p className='text-red-500'>{errors.woreda.message}</p>}
     <label className='ml-16'>Kebele:</label>
  <input 
        {...register('kebele')}
        defaultValue={proposal?.kebele}
         type="text"
         placeholder="Write Your Address/Kebele" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Phone Number:</label>
           <input 
        {...register('phoneNo')}
        defaultValue={proposal?.phoneNo}
         type="text"
         placeholder="Write Your Phone Number with +251" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Occupation/Job:</label>
           <input 
        {...register('occupation')}
        defaultValue={proposal?.occupation}
         type="text"
         placeholder="Write Your Job/Occupation" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Policy Start Date:</label>
<input 
        {...register('startDate')}
        defaultValue={proposal?.startDate}

         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Policy End Date:</label>
<input 
        {...register('endDate')}
        defaultValue={proposal?.endDate}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Car Model:</label>
<input 
        {...register('model')}
        defaultValue={proposal?.model}

         type="text"
         placeholder="Type Your Car Model" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Proposed Date:</label>
<input 
        {...register('proposedDate')}
        defaultValue={proposal?.proposedDate}

         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />

     <label className='ml-16'>Branch:</label>
           <input 
        {...register('branch')}
        defaultValue={proposal?.branch}

         type="text"
         placeholder="Write Branch" 
         className="input input-bordered input-secondary w-full max-w-xs" />
    <div className='flex flex-col mr-11 justify-between mt-20'>
      <h1 className='font-bold text-2xl'>Insurance Types</h1>
    <label className="label cursor-pointer">
    <input  
     {...register('comprehensive')}
    name="comprehensive" 
    type="checkbox" 
    checked={checkboxes.comprehensive}  
    onChange={handleCheckboxChange} 
    className="checkbox checkbox-primary p-0" />
    <p className="label-text p-0">comprehensive:</p> 
  </label>
  <label className="label cursor-pointer">
    <input 
     {...register('thirdParty')}

    name="thirdParty" 
    type="checkbox" 
    checked={checkboxes.thirdParty}  
    onChange={handleCheckboxChange} 
    className="checkbox checkbox-primary" />
    <span className="label-text">thirdParty:</span> 
  </label>
  <label className="label cursor-pointer">
    <input  
      {...register('thirdPartyFireAndTheft')}

    name="thirdPartyFireAndTheft" 
    type="checkbox" 
    checked={checkboxes.thirdPartyFireAndTheft}  
    onChange={handleCheckboxChange} 
    className="checkbox checkbox-primary" />
  <span className="label-text">thirdPartyFireAndTheft:</span> 
  </label>
  <label className="label cursor-pointer">
    <input  
      {...register('ondamage')}
    name="ondamage" 
    type="checkbox" 
    checked={checkboxes.ondamage}  
    onChange={handleCheckboxChange} 
    className="checkbox checkbox-primary" />
  <span className="label-text">ondamage:</span> 
  </label>
  </div>
         <button 
         type="submit" 
         className='btn btn-neutral w-full max-w-xs'
         disabled={isSubmitting}
         >{proposal ? 'Update Proposal' : 'Submit Proposal'}</button>
        </form>

    </div>
  )
}

export default ProposalForm
