import './styles.css';
import {ReactComponent as Logo} from './logo.svg';

function Navbar() {
  return(
    <nav className="main-navbar">
      <Logo/>
      <a href="http://" className="logo-text">Pizza delivery</a>
    </nav>
  );
}

export default Navbar;
