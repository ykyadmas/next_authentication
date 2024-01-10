import Link from 'next/link'
import React from 'react'

const EditButton = ({ProposalId}:{ProposalId:number}) => {
  return (
    <div>
        <Link href={`/admin/proposal/${ProposalId}/edit`} className='btn btn-primary'>Edit</Link>
     
        <Link href="/admin/proposal" className='btn btn-success'>back</Link> 
    </div>
  )
}

export default EditButton