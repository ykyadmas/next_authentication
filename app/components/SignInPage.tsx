"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function SignIn() {

  const{data:session}=useSession();
  // const router=useRouter();

//   useEffect(()=>{
// if(session){
//   return router.push("/");
// }
//   },[router,session])

  return (
    <div>
{session && session.user ? (
  <div>
  <p>{`${session.user.firstName} ${session.user.lastName}`}</p>
  <Link href="/api/auth/signout" className='btn btn-primary'>Signout</Link>

  </div>
):(
  <div className='flex gap-4'>
  <Link href="/auth/signup" className='btn btn-primary'>Sign up</Link>
   <Link href="/api/auth/signin" className='btn btn-primary'>Sign in</Link>
  </div>
)}   
    
    </div>
  )
}
