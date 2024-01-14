"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import ProposalSubmit from '../ProposalSubmit/page';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import Homepgae from './HomePage';

export default function SignIn() {

  const{data:session}=useSession();


  return (
    <div>
{session && session.user ? (
 
  <div className='flex justify-end bg-gray-500 gap-4'>
  <p>{`${session.user.firstName} ${session.user.lastName}`}</p>
  <Link href="/" className='btn btn-primary'>Home</Link>
  <>
{session.user?.role=="ADMIN" && <Link className='btn btn-primary' href="/admin">Admin</Link>}
  </>
  <Link href="/ProposalSubmit" className='btn btn-primary'>write your Proposal</Link>
  <Link href="/api/auth/signout" className='btn btn-primary'>Signout</Link>
  </div>
):(
 <div>
   <div className='flex gap-4 justify-end bg-gray-500'>
  <Link href="/auth/signup" className='btn btn-primary'>Sign up</Link>
   <Link href="/api/auth/signin" className='btn btn-primary'>Sign in</Link>
  </div>

<div className='m-10'>
  <Homepgae />
</div>

 </div>
)}

 </div>
  )
}
