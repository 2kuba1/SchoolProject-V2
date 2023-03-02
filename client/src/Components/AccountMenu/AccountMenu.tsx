import styles from './AccountMenu.module.css';
import AccountImage from '../../assets/Account_circle.svg';
import { Link } from 'react-router-dom';

const AccountMenu = () => {
  return (
    <div className={styles.Menu}>
      <div className={styles.Links}>
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
      </div>
    </div>
  );
};

export default AccountMenu;
