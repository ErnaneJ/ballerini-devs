import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FadeInTitle, FadeInDescription, FadeInButton } from './animations';
import Programmer_main from '../../../../assets/images/programador_main.svg';
import BlobsCenter from '../../../../assets/images/blobs_meio.svg';
import BlobsBottom from '../../../../assets/images/blobs_baixo.svg';

const LandingContent = () => {
  const [showButton, setShowButton] = useState(false);
  setTimeout(() => {
    setShowButton(true);
  }, 750);
  return <>
    <section className="ladding__content container">
      <div className="ladding__left_content">
        <FadeInTitle>
          <h1 className="landding__title">O maior banco de devs <br/> do Brasil</h1>
        </FadeInTitle>
        <FadeInDescription>
          <p className="landding__description">
            Não importa se front ou back end,  fazer networking e muito importante. 
            Faça parte da maior comunidade de desenvolvedores brasileiros.
          </p>
        </FadeInDescription>
        <FadeInButton showButton={showButton}>
          <Link to="/devs" className="landding_callToAction">Entre Agora</Link>
        </FadeInButton>
      </div>
      <div className="ladding__right_content">
        <img alt=" " src={Programmer_main} width="650" height="650" alt="Programador Main image Landing Page"/>
      </div>
    </section>
    {/* Blobs */}
    <img alt=" " src={BlobsCenter} className="ladding__blobs_center"/>
    <img alt=" " src={BlobsBottom} className="ladding__blobs_botton"/>
  </>;
};

export default LandingContent;