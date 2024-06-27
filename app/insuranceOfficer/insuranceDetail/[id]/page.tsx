import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import EditButton from '../../_comopnents/InsuranceEdit/EditButton';
import DeleteButton from '../../_comopnents/InsuranceEdit/DeleteButton';
import CancelMessageModal from '@/app/admin/_comopnents/cancelMessage/cancelMessageMode';
import DisplayCancelInsurance from '../../_comopnents/DisplayInsuranceCancel/DisplayInsuranceCancel';
import InsuranceApproveFrm from '../../_comopnents/Insuranceapprove';
import DisplayApprove from '../../_comopnents/DisplayApprove/DisplayAprove';
// import DownloadButton from '../handleDownload';
// import Modal from '@/app/components/ClaimForm/Modal';

interface Props {
    params:{id:string}
}

const Insurance = async ({ params }: Props) => {
    const display = await prisma.payment.findFirst({
        where:{id:parseInt(params.id)},
        include: {
            user: true,
            proposal: true,
            InsuranceCancelationMessages:true,
            InsuranceCancelations:true,
        }
    });

    if (!display) return <NotFoundPage />;

    const displayCancele=display.InsuranceCancelations.length>0 

    return (
        <div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <td>Amount</td>
                            <th>Kebele</th>
                            <th>Woreda</th>
                            <th>Branch</th>
                            <th>StartDate</th>
                            <th>CreatedAt</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{display.id}</td>
                            <td>{display.firstName}</td>
                            <td>{display.lastName}</td>
                            <td>{display.amount}</td>
                            <td>{display.proposal.kebele}</td>
                            <td>{display.proposal.woreda}</td>
                            <td>{display.proposal.branch}</td>
                            <td>{display.proposal.startDate}</td>
                            <td>{display.proposal.createdAt.toDateString()}</td>
                            <td><EditButton PaymentId={parseInt(params.id)}/></td>
                            <td><DeleteButton PaymentId={parseInt(params.id)}/></td>
                            <DisplayApprove PaymentId={parseInt(params.id)}/>
                        </tr>
                    </tbody>
                </table>

                {/* <DownloadButton display={display} />
                 <Modal PaymentId={parseInt(params.id)}/> */}

            </div>
            <InsuranceApproveFrm PaymentId={parseInt(params.id)}/>
            <DisplayCancelInsurance PaymentId={parseInt(params.id)}/>
            {displayCancele ?
                  (<CancelMessageModal  PaymentId={parseInt(params.id)}/>):(
                  <p></p>
                  )      

            }
        </div>
    );
};

export default Insurance;
