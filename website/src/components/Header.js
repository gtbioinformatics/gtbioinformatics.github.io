import './Header.css'
import logo from '../assets/logo.svg';

function Header() {
  return (
      <div className='header'>
        <img src={logo} className="logo" />
        <p>Bioinformatics @ GT</p>
      </div>
  );
}

export default Header;
