import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png'></img>
      
      <div className={classes.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;