import styles from './Application.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import { FormEvent, useContext, useRef, useState } from 'react';
import { IsLoggedContext } from '../../Contexts/IsLoggedContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useRelog from '../../Hooks/useRelog';
import { UserContext } from '../../Contexts/UserContext';

const Application = () => {
  useCloseMenu();
  useRelog();
  const { IsLogged } = useContext(IsLoggedContext);
  const { User } = useContext(UserContext);

  const names = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const [error, setError] = useState(false);
  //todo validations
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5259/api/application/createApplication',
        {
          FirstAndLastName: names.current?.value,
          Age: age.current?.value,
          DateOfBirth: date.current?.value,
          Email: email.current?.value,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
          },
        }
      );
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.Application}>
      {IsLogged.isLogged ? (
        <>
          <h1>School Application</h1>
          <form onSubmit={handleSubmit}>
            <label>First and last name</label>
            <input
              ref={names}
              type='text'
              placeholder={`${User.FirstName} ${User.LastName}`}
            />
            <label>Age</label>
            <input ref={age} type='number' placeholder='Age' />
            <label>Date of Birth</label>
            <input ref={date} type='date' />
            <label>Contact Email</label>
            <input ref={email} type='email' placeholder={User.Email} />
            <input type='submit' value='Send' />
          </form>
          {error && <p className={styles.Error}>You have already applied</p>}
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
