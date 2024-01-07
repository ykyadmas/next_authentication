"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import SignIn from './components/SignInPage';

export default function Home() {

  return (
    <div>
      <SignIn />
    <p>HomePage</p>
    </div>
  )
}
