import { prisma } from '@/lib/prisma';
import React from 'react'

interface Props{
    PaymentId:number;
}

const DisplayApprove = async({PaymentId}:Props) => {

    const display=await prisma.insuranceApprove.findFirst({
        where: {PaymentId},
        include:{
            user:true,
            Payment:true
        }
    })

  if (display)
  return (
     <div className="overflow-x-auto">
    <table className="table ">
    <tbody>
      <td><button className='btn btn-accent'>{display.status}</button></td>
      </tbody>
  </table>
    </div>
 
 ) 
}

export default DisplayApprove