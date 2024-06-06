import InsuranceUpdate from '@/app/insuranceOfficer/_comopnents/insuranceUpdate/InsuranceUpdate';
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation';
import React from 'react'


interface Props{
  ProposalId:number,
  params:{id: string}
}

const EditPage = async({params,ProposalId}:Props) => {
const insurance=await prisma.payment.findUnique({
where:{id:parseInt(params.id)}
});
if(!insurance) notFound();
  return (
    <div>
     <InsuranceUpdate payment={insurance} proposalId={parseInt(params.id)}/>
    </div>
  )
}

export default EditPage