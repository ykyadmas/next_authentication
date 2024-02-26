import Link from 'next/link'
import React from 'react'

const EditButton = ({ProposalId}:{ProposalId:number}) => {
  return (
    <div>
        <Link href={`/admin/proposal/${ProposalId}/edit`} className='btn btn-primary'>Edit</Link>

    </div>
  )
}

export default EditButton