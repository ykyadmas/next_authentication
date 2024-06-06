"use client"
import React, { useRef, useState } from 'react';
import CancelMessageForm from './cancelMessage';

interface Props{
  PaymentId:number,

}
const CancelMessageModal= ({PaymentId}:Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>Request Claim</button>
      <dialog ref={modalRef} className="modal" open={showModal}>
        <div className="modal-box">
          <CancelMessageForm  PaymentId={PaymentId}/>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CancelMessageModal;
