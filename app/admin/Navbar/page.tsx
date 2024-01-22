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
     <div className='flex flex-row mt-16 ml-16 border-b gap-4'>
     {
        link.map((links)=>(
          <Link
          className={classNames({
          "bg-gray-700 px-3 rounded-full text-white":links.path===currentPath,
          "white":links.path !==currentPath,
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