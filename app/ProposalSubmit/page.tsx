"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { validationSchema } from '../validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type ProposalForm=z.infer<typeof validationSchema>



const ProposalSubmit = () => {
    const router=useRouter();
    const {register,handleSubmit,formState:{errors ,isSubmitting}}=useForm<ProposalForm>({
      resolver:zodResolver(validationSchema)
    });
   

    const [checkboxes, setCheckboxes] = useState({
      comprehensive: false,
      thirdParty: false,
      thirdPartyFireAndTheft: false,
      onDamage: false
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
      await axios.post('/api/proposal',data);
      console.log(data)
      router.push('/ProofSubmit');
      router.refresh();          
      } catch (error) {
          setError("An expected error occurred.");
      }
      })
      
    const [error,setError]=useState('');
    return (
    <div> 
    {error && <div role="alert" className="alert alert-error ml-64 mt-16 w-80">
  <span>{error}</span>
</div>
}

 <form 
        onSubmit={onSubmitProposal}>
           
    <div  className='ml-10 mt-16 grid grid-cols-4 gap-2' >
        
    <label className='ml-16'>First Name:</label>

        <input  
        {...register('firstName')}
        type="text"
         placeholder="Enter your firstName" 
         className="input input-bordered input-secondary w-full max-w-xs" />
         {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}     
     <label className='ml-16'>Last Name:</label>
        <input 
     {...register('lastName')}
        type="text"
         placeholder="Enter your lastName" 
         className="input input-bordered input-secondary w-full max-w-xs" />
        {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
     <label className='ml-16'>Woreda:</label> 
         <input 
        {...register('woreda')}
         type="text"
         placeholder="Write Your Address/Woreda" 
         className="input input-bordered input-secondary w-full max-w-xs" />
{errors.woreda && <p className='text-red-500'>{errors.woreda.message}</p>}
     <label className='ml-16'>Kebele:</label>
  <input 
        {...register('kebele')}
         type="text"
         placeholder="Write Your Address/Kebele" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Phone Number:</label>
           <input 
        {...register('phoneNo')}
         type="text"
         placeholder="Write Your Phone Number with +251" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Occupation/Job:</label>
           <input 
        {...register('occupation')}
         type="text"
         placeholder="Write Your Job/Occupation" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Policy Start Date:</label>
<input 
        {...register('startDate')}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Policy End Date:</label>
<input 
        {...register('endDate')}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Car Model:</label>
<input 
        {...register('model')}
         type="text"
         placeholder="Type Your Car Model" 
         className="input input-bordered input-secondary w-full max-w-xs" />
          <label className='ml-16'>Chassis Number:</label>
<input 
        {...register('chassisNo')}
         type="text"
         placeholder="Type Your Car Model" 
         className="input input-bordered input-secondary w-full max-w-xs" />
     <label className='ml-16'>Proposed Date:</label>
<input 
        {...register('proposedDate')}
         type="date"
         className="input input-bordered input-secondary w-full max-w-xs" />

     <label className='ml-16'>Branch:</label>
           <input 
        {...register('branch')}
         type="text"
         placeholder="Write Branch" 
         className="input input-bordered input-secondary w-full max-w-xs" />
    <div className='mr-11 mt-20 flex flex-col justify-between'>
      <h1 className='text-2xl font-bold'>Insurance Types</h1>
    <label className="label cursor-pointer">
    <input  
     {...register('comprehensive')}
    name="comprehensive" 
    type="checkbox" 
    checked={checkboxes.comprehensive}  
    onChange={handleCheckboxChange} 
    className="checkbox-primary checkbox p-0" />
    <p className="label-text p-0">comprehensive:</p> 
  </label>
  <label className="label cursor-pointer">
    <input 
     {...register('thirdParty')}

    name="thirdParty" 
    type="checkbox" 
    checked={checkboxes.thirdParty}  
    onChange={handleCheckboxChange} 
    className="checkbox-primary checkbox" />
    <span className="label-text">thirdParty:</span> 
  </label>
  <label className="label cursor-pointer">
    <input  
      {...register('thirdPartyFireAndTheft')}

    name="thirdPartyFireAndTheft" 
    type="checkbox" 
    checked={checkboxes.thirdPartyFireAndTheft}  
    onChange={handleCheckboxChange} 
    className="checkbox-primary checkbox" />
  <span className="label-text">thirdPartyFireAndTheft:</span> 
  </label>
  <label className="label cursor-pointer">
    <input  
      {...register('ondamage')}
    name="onDamage" 
    type="checkbox" 
    checked={checkboxes.onDamage}  
    onChange={handleCheckboxChange} 
    className="checkbox-primary checkbox" />
  <span className="label-text">ondamage:</span> 
  </label>
    </div>
    </div>
    <div className='mt-10 flex justify-center'>
    <button 
         type="submit" 
         className='btn btn-neutral flex w-full max-w-xs'
         disabled={isSubmitting}
         >{isSubmitting ? "Submit Proposal...":"Submit"}</button>
    </div>
        </form>
    </div>
  )
}

export default ProposalSubmit
