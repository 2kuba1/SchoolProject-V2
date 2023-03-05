import styles from './Login.module.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { FormEvent, useRef, useState } from 'react';
import useCloseMenu from '../../Hooks/useCloseMenu';

interface User {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Role: string;
  exp: number;
}

const Login = () => {
  useCloseMenu();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const [loginSucceed, setLoginSucceed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post(
        'http://localhost:5259/api/account/login',
        {
          email: email.current?.value,
          password: password.current?.value,
        }
      );

      const decoded = jwtDecode<User>(response.data);
      console.log(decoded);
      setLoginSucceed(true);
    } catch (error) {
      setError(true);
    }
    form.current?.reset();
  };

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <input ref={email} type='email' placeholder='Email' />
        <input ref={password} type='password' placeholder='Password' />
        <input type='submit' value='Login' />
      </form>
      {loginSucceed && <p className={styles.Success}>Login Succeed!</p>}
      {error && <p className={styles.Error}>Invalid email or password</p>}
    </div>
  );
};

export default Login;
