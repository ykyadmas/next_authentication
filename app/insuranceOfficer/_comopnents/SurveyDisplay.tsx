import React from 'react'
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import DeletePage from './DeleteSurvey/DeleteSurvey';

interface Props{
    proposalId:number;
}

const SurveyDisplay = async({proposalId}:Props) => {

    const display=await prisma.engineerSurvey.findMany({
        where: {proposalId},
        include:{
            user:true,
            proposal:true
        }
    })
    if(!display) return notFound()

  return (
<div className="overflow-x-auto">

{display.map((survey)=>(
        // eslint-disable-next-line react/jsx-key
       <div key={survey.id}>
         <table className="table" >

<thead>
<tr>
  <th></th>
  <th>Engineer First Name</th>
  <th>Engineer Second Name</th>
  <th>Engineer Message about Proposal</th>
  <th>Login Admin</th>
  <th>Payments that will pay</th>
</tr>
</thead>
<tbody>
<tr>
  <th >{survey.id}</th>
  <td>{survey.firstName}</td>
  <td>{survey.lastName}</td>
  <td>{survey.message}</td>
  <td>{survey.user?.email}</td>
  <td>{survey.payments}</td>
  <DeletePage proposalId={proposalId}/>
</tr>    
</tbody>
</table>
       </div>
    ))
}

</div>

       
 ) 
}

export default SurveyDisplay