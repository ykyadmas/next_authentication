"use client"

import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'


const HeroSection = () => {
  
  return (
    <section className='bg-primary-content' id='home'>
     
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-red-400'>Nib Insurance For Your Insurance</span>
        
        </h1>
      <p className='text-black lg:text-xl mb-6 text-base sm:text-console.log();'>
      Nib Insurance Web Based Vihecle Insurance Management System
              </p>
        <div className=''>
         
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
          <Image src="/insurance.jpg"
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
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
