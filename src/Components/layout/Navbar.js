import React    from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
       
       return (
              <nav className = 'navbar bg-primary' >
                     <h1>{ title }</h1>
                     <div>
                            <Link to = '/' >Home</Link>
                            <Link to = '/about' >About</Link>
                     </div>
              </nav>
       )
}

Navbar.defaultProps = {
       title: 'GITHUB Finder'
};

export default Navbar