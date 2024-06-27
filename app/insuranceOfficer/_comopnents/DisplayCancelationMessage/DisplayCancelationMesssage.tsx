import { prisma } from '@/lib/prisma';
import React from 'react'

interface Props{
    PaymentId:number;
}

const DisplayCancelInsurance = async({PaymentId}:Props) => {

    const display=await prisma.insuranceCancelationMessage.findFirst({
        where: {PaymentId},
        include:{
            user:true,
            Payment:true
        }
    })

  if (display)
  return (
     <div className="overflow-x-auto">
      <td>{display.message}</td>
    </div>
 ) 
}

export default DisplayCancelInsurance