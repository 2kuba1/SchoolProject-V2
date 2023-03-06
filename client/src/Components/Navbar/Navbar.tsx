import Logo from '../../assets/Logo.svg';
import Account_circle from '../../assets/Account_circle.svg';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import AccountMenu from '../AccountMenu/AccountMenu';
import { NavbarContext } from '../../Contexts/NavbarContext';

const Navbar = () => {
  const { IsShown, SetIsShown } = useContext(NavbarContext);
  const handleClick = () => {
    SetIsShown({ isShown: !IsShown.isShown });
  };

  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to='/'>
          <img className={styles.Logo} src={Logo} alt='Logo' />
        </NavLink>
        <ul>
          <li>
            <NavLink className={styles.NavLink} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.NavLink} to='announcements'>
              Announcements
            </NavLink>
          </li>
          <li>
            <a className={styles.NavLink} href='pabloScyzoryksOnlineRegister'>
              Register
            </a>
          </li>
          <li>
            <NavLink className={styles.NavLink} to='apply'>
              Apply
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.NavLink} to='contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <img
              onClick={handleClick}
              className={styles.NavLink}
              src={Account_circle}
              alt='Account icon'
            />
          </li>
        </ul>
      </nav>
      <div>{IsShown.isShown && <AccountMenu />}</div>
    </div>
  );
};

export default Navbar;
