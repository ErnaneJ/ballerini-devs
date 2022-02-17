import React, { useState } from 'react';
import Header from '../../components/header';
import Main from '../../components/Main';
import DevListing from './components/DevListing';
import './devlisting.css';
import {devs} from '../../lib/devs';

const Devs = () => {
  const [filteredDevs, setFilteredDevs ] = useState(devs);
  return <>
    <Header isNotLanding={true} devs={devs} setFilteredDevs={setFilteredDevs}/>
    <Main>
      <DevListing devs={filteredDevs}/>
    </Main>
  </>;
};

export default Devs;