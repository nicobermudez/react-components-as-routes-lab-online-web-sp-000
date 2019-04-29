import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Home</NavLink>
      <NavLink to="/actors">Home</NavLink>
    </div>
  );
};

export default NavBar;
