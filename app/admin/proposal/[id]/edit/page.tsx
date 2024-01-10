import ProposalForm from '@/app/admin/_comopnents/ProposalForm/ProposalForm';
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation';
import React from 'react'


interface Props{
  params:{id: string}
}

const EditPage = async({params}:Props) => {
const proposal=await prisma.proposal.findUnique({
where:{id:parseInt(params.id)}
});
if(!proposal) notFound();
  return (
    <div>
     <ProposalForm proposal={proposal}/>
    </div>
  )
}

export default EditPage