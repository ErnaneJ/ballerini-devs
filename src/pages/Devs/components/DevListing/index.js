import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import DevCard from '../DevCard';
import DevForm from '../DevForm';
import Modal from '../../../../components/Modal';
import { FadeInDownContent, FadeInUpContent } from './animations';
import 'swiper/css';
import "swiper/css/navigation";

const devStructure = {
  name: "", 
  description: "", 
  avatar: "https://imagens.brasil.elpais.com/resizer/AXY-znKLjN2eo__LAuOLMJSSPFA=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6TE7TL7D4YWZFV2TFRSGNGN6JE.jpg", 
  office: '',
  nickGithub: '',
  linkedin: '',
  website: '',
}
const DevListing = ({devs}) => {
  const [statusModal, setStatusModal ] = useState(false);
  const [newDev, setNewDev ] = useState(devStructure);
  const [statusModalEdit, setStatusModalEdit ] = useState(false);
  const [statusModalDelete, setStatusModalDelete ] = useState(false);
  const [currentEditDev, setCurrentEditDev ] = useState(null);

  return <section className="devlisting__container container">
    <FadeInDownContent onClick={() => setStatusModal(true)} className="button button__success add_new_dev" style={{fontWeigth: 'bold'}}>
        Adicionar Desenvolvedor
    </FadeInDownContent>
    <FadeInUpContent>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={devs.length >= 3 ? true : false}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={devs.length >= 1 ? 1 : 0}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: devs.length > 3 ? 3 : devs.length,
            spaceBetween: 0,
          }
        }}
        effect='fade'
        fadeEffect={{crossFade: true}}
        >
          {devs.map((dev, i) => (
            <SwiperSlide key={i}>
              <DevCard dev={dev} setCurrentEditDev={setCurrentEditDev} setStatusModalEdit={setStatusModalEdit} setStatusModalDelete={setStatusModalDelete}/>
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
      </Swiper>
    </FadeInUpContent>
    <FadeInUpContent className="main__footer">
      <p>
        Developed with ❤️ by <a href="https://www.ernane.dev" target="_blank">Ernane Ferreira</a>.  
      </p>
    </FadeInUpContent>

   <Modal 
    statusModal={statusModal}
    setStatusModal={setStatusModal}
    actionModal={true}
    actionSave={() => alert('salvo')}
    modalTitle="Adicionar Desenvolvedor" 
    modalDescription="Preencha corretamente os dados do 
                      formulário para adicionar um novo desenvolvedor."
    >
      <DevForm dev={newDev} updateDev={setNewDev} isNewDev={true}/>
   </Modal>

   <Modal 
      statusModal={statusModalEdit}
      setStatusModal={setStatusModalEdit}
      actionModal={true}
      actionSave={() => alert('Editado')}
      modalTitle="Editar Desenvolvedor"
      modalDescription="Preencha corretamente os dados do 
                        formulário para ditar este desenvolvedor."
      >
      <DevForm dev={currentEditDev} updateDev={setCurrentEditDev} isNewDev={false}/>
   </Modal>

   <Modal 
      statusModal={statusModalDelete}
      setStatusModal={setStatusModalDelete}
      actionModal={true}
      actionSave={() => alert('Deletado')}
      modalTitle="Excluir Desenvolvedor"
      modalDescription="Você tem certeza de que deseja executar esta ação?"
      >
   </Modal>
  </section>;
};

export default DevListing;