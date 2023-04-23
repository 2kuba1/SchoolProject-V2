import styles from './AccountMenu.module.css';
import AccountImage from '../../assets/Account_circle.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import useRelog from '../../Hooks/useRelog';
import { IsLoggedContext } from '../../Context/IsLoggedContext';
import { UserContext } from '../../Context/UserContext';
import useCloseMenu from '../../Hooks/useCloseMenu';
import { motion, AnimatePresence } from 'framer-motion';

const AccountMenu = () => {
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
    useCloseMenu();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={styles.Menu}
      >
        <div className={styles.Links}>
          {IsLogged.isLogged ? (
            <>
              <Link to='accountDetails'>
                <img
                  className={styles.AccountImg}
                  src={AccountImage}
                  alt='Account icon'
                />
                <p>Account</p>
              </Link>
              <div className={styles.Logout} onClick={handleLogout}>
                <img
                  className={styles.AccountImg}
                  src={AccountImage}
                  alt='Account icon'
                />
                <p>Logout</p>
              </div>
            </>
          ) : (
            <>
              <Link to='register'>
                <img
                  className={styles.AccountImg}
                  src={AccountImage}
                  alt='Account icon'
                />
                <p>Register</p>
              </Link>
              <Link to='login'>
                <img
                  className={styles.AccountImg}
                  src={AccountImage}
                  alt='Account icon'
                />
                <p>Login</p>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AccountMenu;
