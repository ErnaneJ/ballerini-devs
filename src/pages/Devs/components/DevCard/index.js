const DevCard = ({dev, setStatusModalEdit, setStatusModalDelete, setCurrentEditDev}) => {
  return <div className="card__container">
    <div className="card">
      <div className="card__avatar">
        <img width="150" heigth="150" src={dev.avatar}/>
      </div>
      <div className="card__info">
        <h2 className="card__name">{dev.name}</h2>
        <p className="card__description"> {dev.description} </p>
      </div>
      <div className="card__actions">
        <div className="card__links">
            <a href={`https://github.com/${dev.nickGithub}`} target="_blank">
              <i className="fa-brands fa-github card__link_icon"></i>
            </a>
            <a href={dev.linkedin} target="_blank">
              <i className="fa-brands fa-linkedin card__link_icon"></i>
            </a>
            <a href={dev.website} target="_blank">
              <i className="fa-solid fa-link card__link_icon"></i>
            </a>
        </div>
        <a href={dev.website} className="button button__success">Ver Mais</a>
      </div>
    </div>
    <div className="container__actions">
      <button className="button button__warning" onClick={() => {setStatusModalEdit(true); setCurrentEditDev(dev)}}>Editar</button>
      <button className="button button__danger" onClick={() => {setStatusModalDelete(true)}}>Deletar</button>
    </div>
  </div>;
};

export default DevCard;