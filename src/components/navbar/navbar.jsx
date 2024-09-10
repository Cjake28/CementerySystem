import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div id="navlogo">LOGO</div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/cementerylot">cementerylot</Link></li>
        
      </ul>
    </nav>
  );
}
