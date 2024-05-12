import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div>
        <h1 className="text-5xl font-bold">Successsfully finished</h1>
        <Link href='/' className="btn btn-primary">Go Back to Home</Link>
        <Link href='' className="btn btn-primary">see you Detail</Link>
      </div>
    </div>
  </div>
  )
}

export default page