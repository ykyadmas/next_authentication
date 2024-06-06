import Link from 'next/link'
import React from 'react'

const ClaimNotFoundPade = () => {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Your Are Not Allowed</h1>
      <p className="py-6">the page is not allowed</p>
      <Link href='/' className="btn btn-primary">Go Back to Home</Link>
    </div>
  </div>
</div>  )
}

export default ClaimNotFoundPade