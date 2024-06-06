import { prisma } from '@/lib/prisma'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


interface Props{
    claimId:number
}

const EvaluatorDisplay = async({claimId}:Props) => {

const display=await prisma.damageEvaluator.findMany()
    
  return (
<div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>First NAme</th>
        <th>lastName</th>
        <th>Message</th>
        <th>File</th>
      </tr>
    </thead>
    <tbody>
        {display.map((item)=>(
    <tr key={item.id}>
    <th>{}</th>
    <td>{item.firstName}</td>
    <td>{item.lastName}</td>
    <td>{item.message}</td>
    <td>
        <Link
     className="flex items-center space-x-3 text-purple-600"
        target="_blank"
        href={item.file}
      >
        <FileText className='mt-2'/>
        <span>View file</span>
      </Link></td>
  </tr>
        ))}
     
    </tbody>
  </table>
</div>  )
}

export default EvaluatorDisplay