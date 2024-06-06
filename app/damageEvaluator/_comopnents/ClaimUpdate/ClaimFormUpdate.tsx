"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FileText } from 'lucide-react';
import { UploadDropzone } from '@/app/utils/uploadthing';
import ClaimSchema from '@/app/components/ClaimForm/ClaimSchema';
import { ClaimForm } from '@prisma/client';

interface Props {
  PaymentId: number;
  claimForm: ClaimForm;
}

const ClaimFormUpdate = ({ PaymentId, claimForm }: Props) => {
  const [policyFile, setPolicyFile] = useState<null | string>(claimForm?.policyFile || null);
  const [carFile, setCarFile] = useState<null | string>(claimForm?.carFile || null);

  const router = useRouter();

  const { handleSubmit, register, formState: { isSubmitting }, setValue } = useForm({
    resolver: zodResolver(ClaimSchema),
    defaultValues: claimForm,
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.patch('/api/claim/' + claimForm.id, { ...data, PaymentId, policyFile, carFile });
      router.push('/damageEvaluator/claim/');
      router.refresh();
    } catch (error) {
      console.error('Error updating claim');
      alert('Failed to update claim. Please try again.');
    }
  };

  // Manually set the value of hidden fields when files are uploaded
  useEffect(() => {
    setValue('policyFile', policyFile as string);
    setValue('carFile', carFile as string);
  }, [policyFile, carFile, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Driver</h1>
        <label className="input input-bordered flex items-center gap-2">
          Driver FullName
          <input
            {...register('driverFullName')}
            type="text"
            className="grow"
            placeholder="Driver FullName"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Address
          <input
            {...register('driverAddress')}
            type="text"
            className="grow"
            placeholder="Address"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Occupation
          <input
            {...register('driverOccupation')}
            type="text"
            className="grow"
            placeholder="Occupation"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Age
          <input
            {...register('age')}
            type="number"
            className="grow"
            placeholder="Age"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Licence No
          <input
            {...register('LicenceNo')}
            type="text"
            className="grow"
            placeholder="Licence No"
          />
        </label>
        <h1>Detail of Accident</h1>
        <label className="input input-bordered flex items-center gap-2">
          Accident Date
          <input
            {...register('acidentDate')}
            type="date"
            className="grow"
            placeholder="Accident Date"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Time
          <input
            {...register('time')}
            type="time"
            className="grow"
            placeholder="Time"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Place
          <input
            {...register('place')}
            type="text"
            className="grow"
            placeholder="Place"
          />
        </label>
        <input type="hidden" {...register('policyFile')} />
        <h1>Policy File</h1>
        <div>
          {policyFile === null ? (
            <UploadDropzone
              endpoint='pdfUploader'
              onClientUploadComplete={(res) => {
                setPolicyFile(res[0].url);
              }}
              onUploadError={() => {
                alert("Error");
              }}
            />
          ) : (
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
        <input type="hidden" {...register('carFile')} />
        <h1>Car File After Accident Occurred</h1>
        <div>
          {carFile === null ? (
            <UploadDropzone
              endpoint='pdfUploader'
              onClientUploadComplete={(res) => {
                setCarFile(res[0].url);
              }}
              onUploadError={() => {
                alert("Error");
              }}
            />
          ) : (
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
        <button type='submit' className='btn btn-primary'>{isSubmitting ? "Updating..." : "Edit claim"}</button>
      </form>
    </div>
  );
};

export default ClaimFormUpdate;
