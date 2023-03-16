import styles from './MobileNavbar.module.css';
import menu from '../../../assets/Menu.png';
import logo from '../../../assets/Logo.svg';
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { NavbarContext } from '../../../Contexts/NavbarContext';
import { NavLink } from 'react-router-dom';
import { IsLoggedContext } from '../../../Contexts/IsLoggedContext';
import { UserContext } from '../../../Contexts/UserContext';
import useRelog from '../../../Hooks/useRelog';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { IsShown, SetIsShown } = useContext(NavbarContext);
  const handleClick = () => {
    SetIsShown({ isShown: !IsShown.isShown });
  };

  return (
    <>
      <nav className={styles.MobileNav}>
        <img src={logo} alt='logo' />
        <motion.img
          onClick={() => {
            setIsOpen(!isOpen);
            handleClick();
          }}
          src={menu}
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5, type: 'tween' }}
        />
      </nav>
      {IsShown.isShown && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: 'auto',
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
        >
          <MobileMenu />
        </motion.div>
      )}
    </>
  );
};

const MobileMenu = () => {
  useRelog();
  const { IsLogged, SetIsLogged } = useContext(IsLoggedContext);
  const { SetUser } = useContext(UserContext);

  const handleLogout = () => {
    SetUser({
      Email: '',
      exp: 0,
      FirstName: '',
      Id: '',
      LastName: '',
      Role: '',
    });
    SetIsLogged({
      isLogged: false,
    });
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className={styles.MobileMenu}>
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
        {IsLogged.isLogged ? (
          <>
            <li>
              <NavLink className={styles.NavLink} to='accountDetails'>
                Account
              </NavLink>
            </li>
            <li>
              <div onClick={handleLogout}>
                <p className={styles.Logout}>Logout</p>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className={styles.NavLink} to='login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.NavLink} to='register'>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MobileNavbar;
