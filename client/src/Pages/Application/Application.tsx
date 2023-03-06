import styles from './Application.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import { useContext } from 'react';
import { IsLoggedContext } from '../../Contexts/IsLoggedContext';
import { Link } from 'react-router-dom';

const Application = () => {
  useCloseMenu();
  const { IsLogged } = useContext(IsLoggedContext);
  return (
    <div className={styles.Application}>
      {IsLogged.isLogged ? (
        <>
          <h1>School Application</h1>
          <form>
            <label>First and last name</label>
            <input type='text' />
            <label>Age</label>
            <input type='number' />
            <label>Date of Birth</label>
            <input type='date' />
            <label>Contact Email</label>
            <input type='email' />
            <input type='submit' value='Send' />
          </form>
        </>
      ) : (
        <>
          <h1>To apply to our school you must have an account!</h1>
          <div className={styles.LoginAndRegister}>
            <Link className={styles.Btn} to='/login'>
              Login
            </Link>
            <Link className={styles.Btn} to='/register'>
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Application;
