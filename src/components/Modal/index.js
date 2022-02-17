import { FadeInUpContent, FadeInContent } from './animations';
const Modal = (props) => {
  const closeModal = () => {
    props.setStatusModal(false);
  }
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
          <button className="button  button__success" onClick={() => {props.actionSave(); closeModal();}}>Salvar</button>
         : <></>}
      </div>
    </FadeInUpContent>
  </FadeInContent>;
  return <></>;
};

export default Modal;