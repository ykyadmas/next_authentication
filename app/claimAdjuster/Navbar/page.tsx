"use client"
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { usePathname } from 'next/navigation'
import React from 'react'

const link=[
{ 
   title:'Dashboard',
  path:'/admin/dashboard'
},
{ 
  title:'Proposals',
 path:'/admin/proposal'
},
{ 
  title:'Messages',
 path:'/admin/contact'
}
]
const Navbar = () => {
  const currentPath=usePathname();
  console.log(currentPath)
  return (
    <div>
     <div className='ml-5 mt-16 flex h-20 flex-row gap-4 border-b bg-gray-400'>
     {
        link.map((links)=>(
          <Link
          className={classNames({
          "bg-black px-3 h-8 mt-3 text-white":links.path===currentPath,
          "white mt-3":links.path !==currentPath,
          })}
           href={links.path} 
           key={links.title}>
            {links.title}
            </Link>
        ))
      }
     </div>
    </div>
  )
}

export default Navbar