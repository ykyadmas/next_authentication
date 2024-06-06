"use client"
import { adminSideBarLink } from '@/app/myAccount/_components/links/constants'
// import { sidebarLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSideBar = () => {
 const pathname = usePathname()
  return (
    <section className='sticky left-0  top-0 mt-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-amber-500  bg-gradient-to-b from-yellow-100 via-amber-400 to-amber-300 p-6 pt-36 max-sm:hidden lg:w-[266px] dark:shadow-none'>
        <div className='mt-[-100px] flex flex-col gap-6'>
        {adminSideBarLink.map((link)=>(
        <div key={link.label} className=''>
            <Link className={`${pathname === link.route ? 'flex w-full flex-row rounded-full bg-orange-500 p-2' : 'flex w-full flex-row rounded-full bg-none p-2'}`} href={link.route} >
                <Image src={link.imgURL} className='' alt='image' width={24} height={24}/>
                <p className='ml-10'>{link.label}</p>
                </Link>
        </div>
      ))
      }
        </div>
    </section>
  )
}

export default LeftSideBar