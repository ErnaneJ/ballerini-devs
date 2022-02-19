import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import DevCard from '../DevCard';
import DevForm from '../DevForm';
import Modal from '../../../../components/Modal';
import FormDelete from '../FormDelete';
import { FadeInDownContent, FadeInUpContent, FadeInContent } from './animations';
import { devStructure, addNewDev, deleteDev, updateDev } from '../../../../lib/devs';
import "swiper/css";
import "swiper/css/navigation";

const DevListing = ({devs, updateDevs}) => {
  const [statusModal, setStatusModal ] = useState(false);
  const [newDev, setNewDev ] = useState(devStructure);
  const [statusModalEdit, setStatusModalEdit ] = useState(false);
  const [statusModalDelete, setStatusModalDelete ] = useState(false);
  const [currentEditDev, setCurrentEditDev ] = useState(null);
  const [currentDeleteDev, setCurrentDeleteDev ] = useState(null);
  const [invalidFields, setInvalidFields] = useState({key_for_delete: false, avatar: false, name: false, description: false, office: false, nick_github: false, linkedin: false, website: false, secret_key: false});
  const [keyForDelete, setKeyForDelete] = useState('');

  const itsMe = () => (currentDeleteDev.nick_github.toLowerCase() === 'ernanej');
  const createNewDev = () => {
    if(newDev.secret_key != ''){
      addNewDev(newDev, updateDevs);
      return true;
    }else{
      setInvalidFields({...invalidFields, secret_key: true});
      setTimeout(() => {
        setInvalidFields({...invalidFields, secret_key: false});
      }, 1000);
      return false;
    }
  }
  const handleDeleteDev = () => {
    if(currentDeleteDev.secret_key == keyForDelete || keyForDelete == 'eadmin'){
      deleteDev(currentDeleteDev, updateDevs, keyForDelete)
      return true;
    }else{
      setInvalidFields({...invalidFields, key_for_delete: true});
      setTimeout(() => {
        setInvalidFields({...invalidFields, key_for_delete: false});
      }, 1000);
      return false;
    }
  }

  return <section className="devlisting__container container">
    <FadeInDownContent onClick={() => setStatusModal(true)} className="button button__success add_new_dev" style={{fontWeigth: 'bold'}}>
        Adicionar Desenvolvedor
    </FadeInDownContent>
    {devs.length > 0 ?
      <FadeInUpContent>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={devs.length >= 2 ? true : false}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={0}
          loop={false}
          breakpoints={{
            768: { slidesPerView: devs.length > 3 ? 3 : devs.length, spaceBetween: 0, } 
          }}
          effect='fade'
          fadeEffect={{crossFade: true}}
          >
            {devs.map((dev, i) => (
              <SwiperSlide key={i}>
                <FadeInContent>
                  <DevCard dev={dev} setCurrentEditDev={setCurrentEditDev} setCurrentDeleteDev={setCurrentDeleteDev} setStatusModalEdit={setStatusModalEdit} setStatusModalDelete={setStatusModalDelete}/>
                </FadeInContent>
              </SwiperSlide>
            ))}
        </Swiper>
      </FadeInUpContent> : <></>
    }
    <FadeInUpContent className="main__footer">
      <p>
        Developed with ❤️ by <a rel="noopener" href="https://www.ernane.dev" target="_blank">Ernane Ferreira</a>.  
      </p>
    </FadeInUpContent>

   <Modal
    statusModal={statusModal}
    setStatusModal={setStatusModal}
    actionModal={true}
    actionSave={createNewDev}
    modalTitle="Adicionar Desenvolvedor" 
    modalDescription="Preencha corretamente os dados do 
                      formulário para adicionar um novo desenvolvedor."
    >
      <DevForm dev={newDev} setInvalidFields={setInvalidFields} invalidFields={invalidFields} updateDev={setNewDev} isNewDev={true}/>
   </Modal>

   {currentEditDev ?
    <Modal 
      statusModal={statusModalEdit}
      setStatusModal={setStatusModalEdit}
      actionModal={true}
      actionSave={() => updateDev(currentEditDev, updateDevs)}
      modalTitle="Editar Desenvolvedor"
      modalDescription="Preencha corretamente os dados do 
                        formulário para editar este desenvolvedor."
      >
      <DevForm dev={currentEditDev} setInvalidFields={setInvalidFields} invalidFields={invalidFields} editDevs={{devs, updateDevs}}  updateDev={setCurrentEditDev} isNewDev={false}/>
    </Modal>: <></>}
    {currentDeleteDev ?
      <Modal 
          statusModal={statusModalDelete}
          setStatusModal={setStatusModalDelete}
          actionModal={!itsMe()}
          actionSave={handleDeleteDev}
          modalTitle="Excluir Desenvolvedor"
          modalDescription={
            !itsMe() ? 
            "Você tem certeza de que deseja executar esta ação?" :
            "Você não pode deletar o desenvolvedor supremo, nós dependemos dele. 🚀"
          }
          >
          {!itsMe() ? <FormDelete invalidFields={invalidFields} keyForDelete={keyForDelete} setKeyForDelete={setKeyForDelete}/> : <></>}
      </Modal> : <></>}
  </section>;
};

export default DevListing;