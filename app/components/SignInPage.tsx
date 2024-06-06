"use client"

import { useSession } from 'next-auth/react';
import Link from 'next/link'
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import Homepgae from './HomePage';
import HeroSection from './HeroSection';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Location from './Location';

export default function SignIn({engineerSurveyId}:{engineerSurveyId:number}) {

const{data:session}=useSession();

  return (
    <div>

{session && session.user ? (
     <div>
  <div className='flex justify-end gap-4 bg-gray-500'>
  <>
{session.user?.role==="SURVEYENGINEER" && <Link className='btn btn-primary' href="/admin">Survey Evaluater</Link>}
{session.user?.role==="CLAIMADJUSTER" && <Link className='btn btn-primary' href="/claimAdjuster">Claim Adjuster</Link>}
{session.user?.role==="INSURANCEOFFICER" && <Link className='btn btn-primary' href="/insuranceOfficer">Insurance Officer</Link>}
{session.user?.role==="DAMAGEEVALUATER" && <Link className='btn btn-primary' href="/damageEvaluator">Damage Evaluator</Link>}

  </>
  {/* <Link href="/ProposalSubmit" className='btn btn-primary'>write your Proposal</Link> */}
  <Link href="#home" className='mt-2 text-white'>Home</Link>
  <Link href="#about" className='mt-2 text-white'>About</Link>
  <Link href="#proposal" className='mt-2 text-white'>Proposals</Link>
  <Link href="#contact" className='mt-2 text-white'>Contact</Link>
  <Link href="/myAccount" className='mt-2 text-white'>My Account</Link>

  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 rounded-full">{session.user.firstName}</div>
  <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
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
   <div className='flex justify-end gap-4 bg-gray-500'>
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
