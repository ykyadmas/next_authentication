import Link from 'next/link'
import React from 'react'

const EditButton = ({PaymentId}:{PaymentId:number}) => {
  return (
    <div>
        <Link href={`/insuranceOfficer/insuranceDetail/${PaymentId}/edit`} className='btn btn-primary'>Edit</Link>
    </div>
  )
}

export default EditButton