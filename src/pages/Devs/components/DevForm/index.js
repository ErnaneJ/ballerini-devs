const DevForm = ({dev, updateDev, isNewDev}) => {
  const update = (e, key) => {
    updateDev({...dev, [key]: e.target.value});
  }
  const inputs = [
    {name: 'Nome', key: 'name'},
    {name: 'Description', key: 'description'},
    {name: 'Cargo', key: 'office'},
    {name: 'Usuário no Github', key: 'nickGithub'},
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
    </div>
    <div className="form__inputs">
      {inputs.map((input, i) => (
        <div className="form__input_group" key={i}>
          <label className="form__label" htmlFor={`${input.key}-${i}`}>{input.name}</label>
          <input
            className="form__input" 
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