"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import SignIn from './components/SignInPage';
import HomePage from './components/HomePage';
export default function Home() {

  return (
    <div>
      <SignIn />
        </div>
  )
}
