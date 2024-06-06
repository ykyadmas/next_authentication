import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import DownloadButton from '../handleDownload';
import Modal from '@/app/components/ClaimForm/Modal';
import ClaimDisplay from '../../_components/ClaimDisplay';
import CancelModal from '../../_components/CancelModal';

interface Props {
    params:{id:string}
}

const Insurance = async ({ params }: Props) => {
    const display = await prisma.payment.findFirst({
        where:{id:parseInt(params.id)},
        include: {
            user: true,
            proposal: true,
            claimForm: true
        }
    });

    if (!display) return <NotFoundPage />;

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
                        </tr>
                    </tbody>
                </table>
               <div className=' flex justify-between'>
               <DownloadButton display={display} />
               <a className='btn btn-primary' href='/public/commercial.jpeg' download={'/public/Comprehensive.jpg'}>download</a>
               <CancelModal PaymentId={parseInt(params.id)}/>
                 <Modal PaymentId={parseInt(params.id)}/>
                 
               </div>
               <div className='mt-7 flex justify-center'>Claim Display</div>

           <div className='mt-10 flex'>
         <ClaimDisplay PaymentId={parseInt(params.id)}/>
          </div>
            </div>
        </div>
    );
};

export default Insurance;
