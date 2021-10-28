import {Link} from 'react-router-dom';
import './header.css';
import Home from '../../pages/Home';

export default function Header() {
    return (
      <header>
        <Link to={Home} className='logo'>Filmaria</Link>
        <Link to='/favoritos' className='favoritos'>Salvos</Link>
      </header>
    );
  }