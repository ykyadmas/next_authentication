"use client"
import React, { useRef, useState } from 'react';
import EvaluatorDisplay from './EvaluatorDisplay';

interface Props{
  claimId:number
}
const ModalEavluator= ({claimId}:Props) => {
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
      <button className="btn" onClick={openModal}>Damage Evaluator</button>
      <dialog ref={modalRef} className="modal" open={showModal}>
        <div className="modal-box">
          <EvaluatorDisplay claimId={claimId}/>
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

export default ModalEavluator;
