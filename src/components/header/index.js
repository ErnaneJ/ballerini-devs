import LogoBalleriniDevs from '../../assets/images/logo_ballerini_devs.svg';
import { Link } from "react-router-dom";
const icons = [
  {name: 'Linkedin', icon: 'linkedin', link: '/'},
  {name: 'Facebook', icon: 'facebook', link: '/'},
  {name: 'Discord', icon: 'discord', link: '/'}
]
const Header = ({isNotLanding}) => {
  return <header>
    <section className="container header__container">
      <div className="header__social_icons">
        {icons.map((icon, i) => (
          <Link to={icon.link} key={i}>
            <i className={`fa-brands fa-${icon.icon} header__icons`}></i>
          </Link>  
        ))}
      </div>
      <div className="header__logo">
        <img src={LogoBalleriniDevs} alt="Ballerini Devs Logo"/>
        <Link to='/'>
          Ballerini Devs
        </Link>
      </div>
      {isNotLanding ?
        <div className="header__seachable_devs">
          <i class="fa-solid fa-magnifying-glass seachable_icon"></i>
          <input type="text" placeholder="Buscar.." className="input__seachable"/>
        </div> : <div></div>
      }
    </section>
  </header>
};

export default Header;