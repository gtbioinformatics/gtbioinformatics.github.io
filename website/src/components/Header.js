import './Header.css'
import logo from '../assets/logo.svg';

function Header() {
  return (
      <div className='header'>
        <img src={logo} className="logo" />
        <div className="clubText">Bioinformatics @ GT</div>
      </div>
  );
}

export default Header;
