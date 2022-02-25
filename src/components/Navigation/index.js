import React, { useEffect } from 'react';

function Nav() {

    return (
  <header>
    <h2>Maggie Finnegan</h2>
    <nav>
      <ul className = 'flex-row'>
        <li className= 'mx-2'>
          <a data-testid="about" href="#about">About Me</a>
        </li>
        <li className='mx-2'>
          <a data-testid='portfolio' href="#portfolio">Portfolio</a>
        </li>
        <li className='mx-2'>
          <a data-testid='contact' href="#contact">Contact</a>
        </li>
        <li className='mx-2'>
          <a data-testid='resume' href="#resume">Resume
          </a>
        </li>
      </ul>
    </nav>
</header>
    )
}

export default Nav;