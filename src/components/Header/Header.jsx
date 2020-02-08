import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'></img>
      
      <div className={classes.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <Button variant="contained" color="primary" onClick={props.logout}>Log Out</Button></div>
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;