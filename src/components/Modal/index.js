import React, { useState, useEffect } from 'react';
import { FadeInUpContent, FadeInContent } from './animations';
import Loading from '../../pages/Devs/components/Loading'
const Modal = (props) => {
  const [ loading, setLoading ] = useState(false);
  const closeModal = () => {
    props.setStatusModal(false);
  }
  const actionSaveAndCloseModal = () => {setLoading(true); setTimeout(() => {
    props.actionSave(); 
    setTimeout(()=> closeModal(), 300);
    setLoading(false)
  }, 1000);}

  if(props.statusModal) return <FadeInContent statusModal={props.statusModal} className="modal__background">
    <FadeInUpContent className="modal__container">
      <div className="modal__header">
        <h2 className="modal__title">{props.modalTitle}</h2>
        <p className="modal__description">{props.modalDescription}</p>
      </div>
      <div className="modal__body">
        {props.children}
      </div>
      <div className="modal__footer">
        <button className="button button__danger" onClick={closeModal}>{props.actionModal ?'Cancelar':'Fechar'}</button>
        {props.actionModal ?
          <button className="button  button__success" onClick={actionSaveAndCloseModal}>Confirmar</button>
         : <></>}
      </div>
    </FadeInUpContent>
    <Loading status={loading} bg={true}/>
  </FadeInContent>;
  return <></>;
};

export default Modal;