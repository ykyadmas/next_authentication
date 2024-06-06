import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<div className="navbar bg-base-300">
<div className='flex-1 justify-between'> 
     <button className="btn btn-ghost text-xl">My Account</button>
  <Link href="/" className="btn btn-ghost text-xl">Back to Home</Link>
</div>

</div>
  )
}

export default Navbar