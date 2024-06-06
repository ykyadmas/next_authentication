import ClaimFormUpdate from '@/app/damageEvaluator/_comopnents/ClaimUpdate/ClaimFormUpdate';
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation';
import React from 'react'


interface Props{
  PaymentId:number,
  params:{id: string}
}

const EditPage = async({params,PaymentId}:Props) => {
const claim=await prisma.claimForm.findUnique({
where:{id:parseInt(params.id)}
});
if(!claim) notFound();
  return (
    <div>
     <ClaimFormUpdate claimForm={claim} PaymentId={parseInt(params.id)}/>
    </div>
  )
}

export default EditPage