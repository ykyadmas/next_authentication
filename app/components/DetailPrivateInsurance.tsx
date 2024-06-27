import React from 'react'
import Link from 'next/link'

const DetailPrivateInsurance = () => {
  return (
    <div className='ml-0 sm:ml-0'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/private.jpeg" alt="private" /></figure>
  <div className="card-body">
    <h2 className="card-title">Private Policy</h2>
    <p>
    One of the expenses of living is a car. At Insurance House, we offer insurance options that satisfy your demands and safeguard your investment, allowing you to feel secure. Our Private Motor Vehicle Insurance Policy offers complete defense against loss or damage to the car itself in the event of an accident, together with protection for the driver and any related legal obligations for death, bodily harm, 
    and/or property damage to other people.

 Our Private Vehecle Policy will protect you against financial damages caused by an accident, natural disaster, theft, or fire. 

</p>
    <div className="card-actions justify-end">
      <Link href="/Insurance" className="btn btn-primary">Get a quote</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default DetailPrivateInsurance