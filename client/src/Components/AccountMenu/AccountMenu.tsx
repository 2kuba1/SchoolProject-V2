import styles from './AccountMenu.module.css';
import AccountImage from '../../assets/Account_circle.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import useRelog from '../../Hooks/useRelog';
import { IsLoggedContext } from '../../Contexts/IsLoggedContext';
import { UserContext } from '../../Contexts/UserContext';

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
  };

  return (
    <div className={styles.Menu}>
      <div className={styles.Links}>
        {IsLogged.isLogged ? (
          <>
            <Link to=''>
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
    </div>
  );
};

export default AccountMenu;
