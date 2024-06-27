// components/InsuranceApproveForm.tsx

"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import InsuranceSchema from '@/app/components/paymetValidation/insuranceAprroveSchema';


interface Props {
  PaymentId: number;
}

type RequestSchema = z.infer<typeof InsuranceSchema>;

const InsuranceApproveForm = ({ PaymentId }: Props) => {
  const router = useRouter();
  
  const { register, handleSubmit, formState: { isSubmitting }, setValue } = useForm<RequestSchema>({
    resolver: zodResolver(InsuranceSchema),
  });

  const onSubmit = async (data: RequestSchema) => {
    try {
      await axios.post(`/api/insuranceApprove/`, { ...data, PaymentId });
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="status">Request Status:</label>
      <select
        id="status"
        {...register('status')}
        onChange={(e) => setValue('status', e.target.value as RequestSchema['status'])}
      >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
      </select>
      <button className='btn btn-primary' type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Approving..." : "Approve"}
      </button>
    </form>
  );
};

export default InsuranceApproveForm;
