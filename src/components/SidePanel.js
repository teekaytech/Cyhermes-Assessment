import '../stylesheets/sidepanel.scss';
import Logo from '../images/logo.png';

const SidePanel = () => (
  <div className="SideBar">
    <figure className="SideBar__logo">
      <img src={Logo} alt="page-logo" className="SideBar__logo--length" />
    </figure>
    <nav>
      <ul className="SideBar__nav">
        <li className="SideBar__nav__item">
          <a href="#pricing">
            Trial & Pricing
            {' '}
            <span className="activeItem">&#10137;</span>
          </a>
        </li>
        <li className="SideBar__nav__item">
          <a href="#pricing">
            Payment Method
            {' '}
            <span className="activeItem">&#10137;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SidePanel;
