import React from 'react'
import Link from 'next/link'

const DetailCommercialInsurance = () => {
  return (
    <div className='ml-0 sm:ml-0'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/commercial.jpeg" alt="commercial" /></figure>
  <div className="card-body">
    <h2 className="card-title">Commercial Policy</h2>
    <p> 
    Our commercial motor vehicle insurance policy offers comprehensive protection against the loss or damage of the vehicle itself as a result of accidents, as well as coverage for the driver against any legal responsibilities related to death, bodily injury, and/or property damage to third parties.
Our Commercial Insurance policy is used to protect commercial cars whose failure or damage could have a detrimental impact on the business of the vehicle owner. Like a private car insurance policy, it covers all vehicle damage as well as third-party legal liability for property damage or injuries/death to third persons.</p>
    <div className="card-actions justify-end">
    <Link href="/Insurance" className="btn btn-primary">Get a quote</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default DetailCommercialInsurance