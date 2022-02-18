const defaultAvatar = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg";

const DevCard = ({dev, setStatusModalEdit, setCurrentDeleteDev, setStatusModalDelete, setCurrentEditDev}) => {
  return <div className="card__container">
    <div className="card">
      <div className="card__avatar">
        <img alt=" " width="150" heigth="150" src={dev.avatar ?? defaultAvatar}/>
      </div>
      <div className="card__info">
        {dev.name ? <h2 className="card__name">{dev.name}</h2> : <></>}
        {dev.office ? <span className="card__office">{dev.office}</span> : <></>}
        {dev.description ? <p className="card__description"> {dev.description} </p> : <></>}
      </div>
      <div className="card__actions">
        <div className="card__links">
            <a rel="noopener" href={`https://github.com/${dev.nick_github}`} target="_blank">
              <i className="fa-brands fa-github card__link_icon"></i>
            </a>
            <a rel="noopener" href={dev.linkedin} target="_blank">
              <i className="fa-brands fa-linkedin card__link_icon"></i>
            </a>
            <a rel="noopener" href={dev.website} target="_blank">
              <i className="fa-solid fa-link card__link_icon"></i>
            </a>
        </div>
        <a rel="noopener" href={dev.website ?? `https://github.com/${dev.nick_github}`} target="_blank" className="button button__success">Ver Mais</a>
      </div>
    </div>
    <div className="container__actions">
      <button className="button button__warning" onClick={() => {setStatusModalEdit(true); setCurrentEditDev(dev)}}>Editar</button>
      <button className="button button__danger" onClick={() => {setStatusModalDelete(true); setCurrentDeleteDev(dev)}}>Deletar</button>
    </div>
  </div>;
};

export default DevCard;