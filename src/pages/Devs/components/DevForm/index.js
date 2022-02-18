import React, { useState } from 'react';
import {loadUserToGithub} from '../../../../lib/devs';

const DevForm = ({editDevs, dev, updateDev, isNewDev}) => {
  const [invalidGithubNick, setInvalidGithubNick ] = useState(false);
  const update = (e, key) => {
    // if(!isNewDev) editDevs.updateDevs(editDevs.devs.map((d) => {
    //   if(d.id === dev.id) d = dev;
    //   return d;
    // }));
    updateDev({...dev, [key]: e.target.value});
  }
  const handleLoadGithub = () => {
    if(dev.nick_github) return loadUserToGithub(dev, updateDev);
    setInvalidGithubNick(true);
    let timer = setTimeout(() => {
      setInvalidGithubNick(false);
      clearInterval(timer)
    }, 1000);
  }
  const inputs = [
    {name: 'Nome', key: 'name'},
    {name: 'Description', key: 'description'},
    {name: 'Cargo', key: 'office'},
    {name: 'Usuário no Github', key: 'nick_github'},
    {name: 'Linkedin', key: 'linkedin'},
    {name: 'Website', key: 'website'},
  ]
  return <section className="dev__form">
    <div className="form__avatar">
      <img className="form__image" width="150" heigth="150" src={dev.avatar}/>
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
              invalidGithubNick && input.key === 'nick_github' ?
              'invalid__input' :
              ''
            }`} 
          htmlFor={`${input.key}-${i}`}>{input.name}</label>
          <input
            className={`form__input ${
              invalidGithubNick && input.key === 'nick_github' ?
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