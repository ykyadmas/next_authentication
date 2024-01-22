"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import ProposalSubmit from '../ProposalSubmit/page';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import Homepgae from './HomePage';
import HeroSection from './HeroSection';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Location from './Location';
export default function SignIn() {

  const{data:session}=useSession();


  return (
    <div>

{session && session.user ? (
     <div>
  <div className='flex justify-end bg-gray-500 gap-4 position'>
  <>
{session.user?.role=="ADMIN" && <Link className='btn btn-primary' href="/admin">Admin</Link>}
  </>
  {/* <Link href="/ProposalSubmit" className='btn btn-primary'>write your Proposal</Link> */}
  <Link href="#home" className='mt-2 text-white'>Home</Link>
  <Link href="#about" className='mt-2 text-white'>About</Link>
  <Link href="#proposal" className='mt-2 text-white'>Proposals</Link>
  <Link href="#contact" className='mt-2 text-white'>Contact</Link>
 

  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 rounded-full">{session.user.firstName}</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><p>{`${session.user.firstName} ${session.user.lastName}`}</p>
</li>
    <li><Link href="/api/auth/signout">Signout</Link></li>
  </ul>
</div>
  </div>
<HeroSection />
<About />
<ProjectCard />
<Contact />
<Location />
<Footer />
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
