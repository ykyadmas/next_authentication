"use client"
import React, { useRef, useState } from 'react';
import CancelForm from './CancelForm';

interface Props{
  PaymentId:number
}
const CancelModal= ({PaymentId}:Props) => {
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
      <button className="btn" onClick={openModal}>Cancel Your Insurance</button>
      <dialog ref={modalRef} className="modal" open={showModal}>
        <div className="modal-box">
          <CancelForm PaymentId={PaymentId}/>
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

export default CancelModal;
