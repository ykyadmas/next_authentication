import React from 'react';
import { prisma } from '@/lib/prisma';
import NotFoundPage from '@/app/admin/_comopnents/NotFoundPage';
import DownloadButton from '../handleDownload';
import Modal from '@/app/components/ClaimForm/Modal';
import ClaimDisplay from '../../_components/ClaimDisplay';
import CancelModal from '../../_components/CancelModal';
import DisplayCancelInsurance from '@/app/insuranceOfficer/_comopnents/DisplayCancelationMessage/DisplayCancelationMesssage';

interface Props {
  params: { id: string };
}

const Insurance = async ({ params }: Props) => {
  const display = await prisma.payment.findFirst({
    where: { id: parseInt(params.id) },
    include: { 
        user: true,
         proposal: true, 
         claimForm: true,
         InsuranceCancelationMessages: true,
         InsuranceApproves:true
    },
  });

  if (!display) return <NotFoundPage />;

  // Check if there are InsuranceCancelationMessages
  const hasCancelInsuranceData = display.InsuranceCancelationMessages.length > 0;
  const InsuranceApprove=display.InsuranceApproves.length > 0;
  return (
    <div className="">
     {InsuranceApprove ? (
    <div className="">
  

  <div className="overflow-x-auto ">

 <table className="table">
   <thead>
     <tr>
       <th>ID</th>
       <th>FirstName</th>
       <th>LastName</th>
       <td>Amount</td>
       <td>Car Chanssi No</td>
       <th>Kebele</th>
       <th>Woreda</th>
       <th>Branch</th>
       <th>StartDate</th>
       <th>End Date</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>{display.id}</td>
       <td>{display.firstName}</td>
       <td>{display.lastName}</td>
       <td>{display.amount}</td>
       <td>{display.proposal.chassisNo}</td>
       <td>{display.proposal.kebele}</td>
       <td>{display.proposal.woreda}</td>
       <td>{display.proposal.branch}</td>
       <td>{display.proposal.startDate}</td>
       <td>{display.proposal.endDate}</td>
     </tr>
   </tbody>
 </table>
 </div>
 <div className="">
   {hasCancelInsuranceData ? (
     <DisplayCancelInsurance PaymentId={parseInt(params.id)} />
   ) : (
   <>
     <div className='flex justify-between'>
       <div>             
         <DownloadButton display={display} />
       </div>
       <div>
       <a
         className="btn btn-primary"
         href="/police.pdf"
         download="/public/police.pdf"
       >
         download
       </a>
       </div>
       <div>
       <CancelModal PaymentId={parseInt(params.id)} />
       </div>
       <div>
       <Modal PaymentId={parseInt(params.id)} />
       </div>
      </div>
      <div className="">
         <p className='mt-6 flex justify-center border border-black'>Claim Display</p>
      <div className="mt-10 flex">
        <ClaimDisplay PaymentId={parseInt(params.id)} />
      </div>
      </div>
   </>
   )}
 </div>
</div>
     ):(
    <p>After Aprrove the Insurance You can fill Claim and Download your  Insurance</p>
     )}
    </div>
  );
};

export default Insurance;
