import { prisma } from '@/lib/prisma';
import React from 'react'

interface Props{
    PaymentId:number;
}

const DisplayCancelInsurance = async({PaymentId}:Props) => {

    const display=await prisma.insuranceCancelation.findFirst({
        where: {PaymentId},
        include:{
            user:true,
            Payment:true
        }
    })

  if (display)
  return (
    <div>
     <div className="overflow-x-auto">
    <table className="table ">
    <thead>
         <th></th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Amount</th>
        <th>Reason</th>
        <th>Cancelation Date</th>
        <th>Cancelation Time</th>
        <th></th>
     </thead>
    <tbody>
      <td>{display.id }</td>
      <td>{display.Payment.firstName}</td>
      <td>{display.Payment.lastName}</td>
      <td>{display.Payment.amount}</td>
      <td>{display.reason}</td>
      <td>{display.cancilationDate.toString()}</td>
      <td>{display.cancilationTime.toString()}</td>
      </tbody>
  </table>
    </div>
    <div>
    </div>
    </div>
 ) 
}

export default DisplayCancelInsurance