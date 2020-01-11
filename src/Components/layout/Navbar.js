import React from 'react';

const Navbar = ({ title }) => {
       
       return (
              <nav className = 'navbar bg-primary' >
                     <h1>{ title }</h1>
              </nav>
       )
}

Navbar.defaultProps = {
       title: 'GITHUB Finder'
};

export default Navbar