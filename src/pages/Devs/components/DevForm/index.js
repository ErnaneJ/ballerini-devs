import React, { useState } from 'react';
import {loadUserToGithub} from '../../../../lib/devs';


const DevForm = ({setInvalidFields, editDevs, invalidFields, dev, updateDev, isNewDev}) => {
  const update = (e, key) => {
    updateDev({...dev, [key]: e.target.value});
  }
  const handleLoadGithub = () => {
    if(dev.nick_github) return loadUserToGithub(dev, updateDev);
    setInvalidFields({...invalidFields, nick_github: true});
    let timer = setTimeout(() => {
      setInvalidFields({...invalidFields, nick_github: false});
      clearInterval(timer)
    }, 1000);
  }
  const inputs = [
    {name: 'Nome', key: 'name'},
    {name: 'Description', key: 'description'},
    {name: 'Cargo', key: 'office'},
    {name: 'Usuário no Github', key: 'nick_github'},
    {name: 'Linkedin (URL)', key: 'linkedin'},
    {name: 'Website (URL)', key: 'website'}, 
  ]; if(isNewDev) inputs.push({name: 'Chave secreta', key: 'secret_key'} );
  
  return <section className="dev__form">
    <div className="form__avatar">
      <img alt=" " className="form__image" width="150" heigth="150" src={dev.avatar}/>
      <div className="form__input_group">
        <label className="form__label" htmlFor={`avatar--1`}>Avatar</label>
        <input 
          className="form__input" 
          id={`avatar--1`} 
          name={`avatar--1`} 
          type="text" 
          value={dev["avatar"]} 
          onChange={(e) => update(e, "avatar")}/>
        </div>
        <button className="button button__success button__github_load" onClick={handleLoadGithub} >Carregar do github</button>
    </div>
    <div className="form__inputs">
      {inputs.map((input, i) => (
        <div className="form__input_group" key={i}>
          <label className={`form__label ${
              invalidFields[input.key] ?
              'invalid__input' :
              ''
            }`} 
          htmlFor={`${input.key}-${i}`}>{input.name}</label>
          <input 
            className={`form__input ${
              invalidFields[input.key] ?
              'invalid__input' :
              ''
            }`} 
            id={`${input.key}-${i}`} 
            name={`${input.key}-${i}`} 
            type="text" 
            value={dev[input.key]} 
            onChange={(e) => update(e, input.key)}/>
        </div>
      ))}
    </div>
  </section>;
};

export default DevForm;