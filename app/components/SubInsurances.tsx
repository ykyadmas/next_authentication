import Link from 'next/link'
import React from 'react'
import Footer from './Footer'

const SubInsurances = () => {
  return (
    <div className='bg-gradient-to-tr from-red-300 via-yellow-500 to-yellow-950'>
      <div className='grid grid-cols-1 gap-6 px-4 pt-7 md:grid-cols-2 md:px-14 lg:grid-cols-2'>
        <div className="card glass">
          <figure><img src="/Comprehensive.jpg" alt="insurance"/></figure>
          <div className="card-body">
            <h2 className="card-title">COMPREHENSIVE</h2>
            <p>
              <ol>
                <li>Accidental collision or overturning upon mechanical breakdown or wear and tear but excluding damage to tires unless such insured motor vehicle is damaged at the same time.</li>
                <li>Fire, external explosion, self ignition, lightening, theft</li>
                <li>Impact damage caused by failing objects</li>
                <li>Legal liability to third parties for bodily injury or death and damage to property up to specified limit.</li>
              </ol>
            </p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure><img src="/third_party.jpg" alt="car"/></figure>
          <div className="card-body">
            <h2 className="card-title">THIRD PARTY ONLY</h2>
            <p>Legal liability to comply with proclamation No. 559/2008 for vehicles insurance against Third Party risk of the insured to third parties for bodily injury or death and damage to properties up to specified limit.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure><img src="/fire.jpg" alt="car"/></figure>
          <div className="card-body">
            <h2 className="card-title">THIRD PARTY FIRE AND THEFT</h2>
            <p>Legal Liability to third parties for bodily injury or death and damage to properties. Damage to own motor vehicles directly caused by fire, self ignition, lightening, explosion, theft or attempted theft</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card glass">
          <figure><img src="/insurance.jpg" alt="car"/></figure>
          <div className="card-body">
            <h2 className="card-title">ON DAMAGE</h2>
            <p>Own damage car insurance provides compensation against any damages sustained by the insured car due to an unforeseen event like an accident, earthquake, theft, riot, fire, etc. This policy can only be purchased if you have an existing 3rd party car insurance</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/ProposalSubmit" className='btn btn-primary w-full md:w-1/6'>Get A quote</Link>
      </div>
      <Footer />
    </div>
  )
}

export default SubInsurances
