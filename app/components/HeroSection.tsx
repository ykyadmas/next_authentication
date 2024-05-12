"use client"

import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
  
  return (
    <section className='bg-primary-content' id='home'>
     
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl'>
        <span className='bg-gradient-to-r from-slate-600 to-red-400 bg-clip-text text-transparent'>Nib Insurance For Your Insurance</span>
        
        </h1>
      <p className='mb-6 text-base text-black lg:text-xl'>
      Nib Insurance Web Based Vihecle Insurance Management System
      </p>
        <div className=''>
         
        </div>
        </div>
        <div className='col-span-5 mt-4 place-self-center lg:mt-0'>
          <div className='relative size-[250px] lg:size-[400px]'>
          <Image src="/insurance.jpg"
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          width={300}
          height={300}
          alt='hero image'
          />
          </div>
        </div>
   
   </div>
    
    </section>
  )
}

export default HeroSection
