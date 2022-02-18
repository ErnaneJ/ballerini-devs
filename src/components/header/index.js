import LogoBalleriniDevs from '../../assets/images/logo_ballerini_devs.svg';
import { FadeInDownContent } from './animations';
import { Link } from "react-router-dom";
const icons = [
  {name: 'Linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/ernane'},
  {name: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com'},
  {name: 'Discord', icon: 'discord', link: 'https://discord.gg/ballerini'}
]
const Header = ({devs, isNotLanding, setFilteredDevs}) => {
  const filterDevs = (e) => {
    let term = e.target.value;
    if(term === '') setFilteredDevs(devs);
    let filteredDevs = devs.filter(dev => dev.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")));
    setFilteredDevs(filteredDevs);
  }
  const hanndleLogo = () => {
    if(window.innerWidth >= 980) window.location="/";
  }
  return <header>
    <FadeInDownContent className="container header__container">
      <div className="header__social_icons">
        {icons.map((icon, i) => (
          <a target="_blank" rel="noreferrer" href={icon.link} key={i}>
            <i className={`fa-brands fa-${icon.icon} header__icons`}></i>
          </a>  
        ))}
      </div>
      <div className="header__logo">
        <img src={LogoBalleriniDevs} alt="Ballerini Devs Logo" onClick={hanndleLogo}/>
        <Link rel="noreferrer" to='/' className='h_m'>
          Ballerini Devs
        </Link>
        <div className="header__social_icons mobile">
          <Link rel="noreferrer" to="/">
            <i className="fa-solid fa-house-chimney header__icons"></i>
          </Link> 
          {icons.map((icon, i) => (
            <a rel="noreferrer" target="_blank" href={icon.link} key={i}>
              <i className={`fa-brands fa-${icon.icon} header__icons`}></i>
            </a>  
          ))}
      </div>
      </div>
      {isNotLanding ?
        <div className="header__seachable_devs">
          <i className="fa-solid fa-magnifying-glass seachable_icon"></i>
          <input type="text" placeholder="Buscar.." className="input__seachable" onChange={filterDevs}/>
        </div> : <div></div>
      }
    </FadeInDownContent>
  </header>
};

export default Header;