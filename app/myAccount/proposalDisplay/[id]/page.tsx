// import EditButton from '@/app/components/EditButton'
// import DeleteButton from '@/app/components/DeleteButton'
import SurveyDisplayUser from '@/app/admin/_comopnents/SurveyDiplayUser'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'
// import EngineersForm from '../../_comopnents/EngineersForm'

interface Props {
    params: { id: string }
}

const ProposalDisplayPage = async ({ params }: Props) => {
    const proposal = await prisma.proposal.findFirst({
        where: { id: parseInt(params.id) },
        include: {
            user: true,
            
        }
    })

    if (!proposal) notFound();
    return (
        <div className='mt-0'>
            <div className="overflow-x-auto">
            <table className="table w-full max-w-full">
            <thead>
                        <tr>
                            <th></th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Model</th>
                            <th>Chassis No</th>
                            <th>Woreda</th>
                            <th>Kebele</th>
                            <th>Phone No</th>
                            <th>Occupation</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Proposed Date</th>
                            <th>Branch</th>
                            <th>Comprehensive</th>
                            <th>Third Party</th>
                            <th>On Damage</th>
                            <th>Third Party Fire And Theft</th>
                            <th>Created</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{proposal.id}</td>
                            <td>{proposal.firstName}</td>
                            <td>{proposal.lastName}</td>
                            <td>{proposal.model}</td>
                            <td>{proposal.chassisNo}</td>
                            <td>{proposal.woreda}</td>
                            <td>{proposal.kebele}</td>
                            <td>{proposal.phoneNo}</td>
                            <td>{proposal.occupation}</td>
                            <td>{proposal.startDate}</td>
                            <td>{proposal.endDate}</td>
                            <td>{proposal.proposedDate}</td>
                            <td>{proposal.branch}</td>
                            <td>{proposal.comprehensive ? 'Comprehensive' : ''}</td>
                            <td>{proposal.thirdParty ? 'Third Party' : ''}</td>
                            <td>{proposal.ondamage ? 'On Damage' : ''}</td>
                            <td>{proposal.thirdPartyFireAndTheft ? 'Third Party Fire And Theft' : ''}</td>
                            <td>{new Date(proposal.createdAt).toDateString()}</td>
                          
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p className='flex justify-center border-b text-xl font-bold'>Approval Page</p>
                <SurveyDisplayUser proposalId={parseInt(params.id)} />
            </div>
        </div>
    )
}

export default ProposalDisplayPage
