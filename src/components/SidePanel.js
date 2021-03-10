import '../stylesheets/sidepanel.scss';
import Logo from '../images/logo.png';
import Quote from '../images/quote.png';

const SidePanel = () => (
  <div className="SideBar">
    <div>
      <figure className="SideBar__logo">
        <img src={Logo} alt="page-logo" className="SideBar__logo--length" />
      </figure>
      <nav>
        <ul className="SideBar__nav">
          <li className="SideBar__nav__item">
            <a href="#pricing">
              Trial & Pricing
              {' '}
              <span className="activeItem">&#10132;</span>
            </a>
          </li>
          <li className="SideBar__nav__item">
            <a href="#payment">
              Payment Method
              {' '}
              <span className="activeItem">&#10132;</span>
            </a>
          </li>
        </ul>
        <div className="gettingStarted">
          <span className="dotted">---------</span>
          <a href="#started" className="start">
            Get started...
          </a>
        </div>
      </nav>
    </div>
    <div className="SideBar__quote">
      <figure className="SideBar__quote--symbol">
        <img src={Quote} alt="page-logo" className="quoteImg" />
      </figure>
      <p className="SideBar__quote--text">
        Success is not final; failure is not fatal: it is courage to continue
        that counts.
      </p>
      <span className="SideBar__quote--author">-Winston Churchill</span>
    </div>
  </div>
);

export default SidePanel;
