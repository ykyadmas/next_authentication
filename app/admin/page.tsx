"use client"
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import React from 'react'


const admin = () => {

  return (
    <div>
      
  <p className='font-bold'>This is admin page</p>
  <Link href="/Prop" className='btn btn-primary'>Write Your Proposal</Link>
    </div>
  )
}

export default admin