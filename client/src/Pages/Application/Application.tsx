import styles from './Application.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import { FormEvent, useContext, useRef, useState } from 'react';
import { IsLoggedContext } from '../../Context/IsLoggedContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useRelog from '../../Hooks/useRelog';
import { UserContext } from '../../Context/UserContext';
import { z } from 'zod';

const Application = () => {
  useCloseMenu();
  useRelog();
  const { IsLogged } = useContext(IsLoggedContext);
  const { User } = useContext(UserContext);

  const names = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const [namesError, setNamesError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [succes, setSucces] = useState(false);

  const [error, setError] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNamesError(false);
    setAgeError(false);
    setEmailError(false);

    const namesSchama = await z
      .string()
      .min(3)
      .max(60)
      .refine(data => data.includes(' '))
      .safeParseAsync(names.current?.value);

    const ageSchema = await z
      .number()
      .gte(16)
      .lte(100)
      .safeParseAsync(Number(age.current?.value));

    const emailSchema = await z
      .string()
      .email()
      .safeParseAsync(email.current?.value);

    if (!namesSchama.success) setNamesError(true);
    if (!ageSchema.success) setAgeError(true);
    if (!emailSchema.success) setEmailError(true);

    if (namesSchama.success && ageSchema.success && emailSchema.success) {
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
        setSucces(true);
      } catch (error) {
        setError(true);
      }
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
              className={namesError ? styles.InputError : ''}
              ref={names}
              type='text'
              placeholder={`${User.FirstName} ${User.LastName}`}
            />

            <label>Age</label>
            <input
              ref={age}
              type='number'
              placeholder='Age'
              className={ageError ? styles.InputError : ''}
            />
            <label>Date of Birth</label>
            <input ref={date} type='date' />
            <label>Contact Email</label>
            <input
              ref={email}
              type='email'
              placeholder={User.Email}
              className={emailError ? styles.InputError : ''}
            />
            <input type='submit' value='Send' />
          </form>
          {succes && <p className={styles.Succes}>Succesfully applied</p>}
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
