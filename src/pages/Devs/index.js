import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Main from '../../components/Main';
import DevListing from './components/DevListing';
import Loading from './components/Loading';
import BlobsCenter from '../../assets/images/blobs_meio.svg';
import BlobsBottom from '../../assets/images/blobs_baixo.svg';
import './devlisting.css';

import {getAllDevs} from '../../lib/devs';

const Devs = () => {
  const [ loading, setLoading ] = useState(false);
  const [devs, setDevs ] = useState([]);
  const [filteredDevs, setFilteredDevs ] = useState([]);

  useEffect(() => getAllDevs(setDevs, setLoading), []);
  useEffect(() => setFilteredDevs(devs), [devs]);

  return <>
    <Header isNotLanding={true} devs={devs} setFilteredDevs={setFilteredDevs}/>
    <Main>
      {loading ? 
      <Loading status={loading}/>
      :<DevListing devs={filteredDevs} updateDevs={setDevs}/>
    }
    </Main>

    {/* Blobs */}
    <img alt=" " src={BlobsCenter} className="devs__blobs_top"/>
    <img alt=" " src={BlobsBottom} className="devs__blobs_botton"/>
  </>;
};

export default Devs;