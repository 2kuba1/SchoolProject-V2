import styles from './Register.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import { z } from 'zod';
import { FormEvent, useRef, useState } from 'react';
import axios from 'axios';

const Register = () => {
  useCloseMenu();
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const form = useRef<HTMLFormElement>(null);

  const [firstNameError, setFirsNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailIsAlreadyTakenError, setEmailIsAlreadyTakenError] =
    useState(false);
  const [isSucceed, setIsSucceed] = useState<boolean>(false);

  const lowercase = new RegExp('[a-z]+');
  const uppercase = new RegExp('[A-Z]+');
  const digit = new RegExp('(\\d)+');
  const symbol = new RegExp('(\\W)+');

  //danger shit code

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirsNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setEmailIsAlreadyTakenError(false);

    const nameSchema = z.string().min(3).max(60);

    const emailSchema = z.string().email();

    const passwordsSchema = z
      .object({
        password: z.string().min(1),
        confirm: z.string().min(1),
      })
      .refine(data => data.password === data.confirm);

    const passwordSchema = z
      .string()
      .regex(lowercase)
      .regex(uppercase)
      .regex(digit)
      .regex(symbol)
      .min(8)
      .max(25);

    const isFirstNameValid = await nameSchema.safeParseAsync(
      firstName.current?.value
    );
    const isLastNameValid = await nameSchema.safeParseAsync(
      lastName.current?.value
    );
    const isEmailValid = await emailSchema.safeParseAsync(email.current?.value);
    const isPasswordValid = await passwordSchema.safeParseAsync(
      password.current?.value
    );
    const isConfirmPasswrodValid = await passwordsSchema.safeParseAsync({
      password: password.current?.value,
      confirm: confirmPassword.current?.value,
    });

    if (!isFirstNameValid.success) setFirsNameError(true);
    if (!isLastNameValid.success) setLastNameError(true);
    if (!isEmailValid.success) setEmailError(true);
    if (!isPasswordValid.success) setPasswordError(true);
    if (!isConfirmPasswrodValid.success) setConfirmPasswordError(true);

    if (
      isFirstNameValid.success &&
      isLastNameValid.success &&
      isEmailValid.success &&
      isPasswordValid.success &&
      isConfirmPasswrodValid.success
    ) {
      try {
        await axios.post('http://localhost:5259/api/account/register', {
          firstName: firstName.current?.value,
          lastName: lastName.current?.value,
          email: email.current?.value,
          password: password.current?.value,
          confirmPassword: confirmPassword.current?.value,
        });
        setFirsNameError(false);
        setLastNameError(false);
        setEmailError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
        setEmailIsAlreadyTakenError(false);
        setIsSucceed(true);
      } catch (error) {
        setEmailIsAlreadyTakenError(true);
      }
    }
    form.current?.reset();
  };

  return (
    <div className={styles.Register}>
      <h1>Register</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <div className={styles.Names}>
          <input ref={firstName} type='text' placeholder='First Name' />
          <input ref={lastName} type='text' placeholder='Last Name' />
        </div>
        <div className={styles.NamesErros}>
          {firstNameError && (
            <p>First Name field must contain at least 3 chars</p>
          )}
          {lastNameError && (
            <p>Last Name field must contain at least 3 chars</p>
          )}
        </div>
        <input ref={email} type='email' placeholder='Email' />
        {emailError && <p>Invalid email address</p>}
        {emailIsAlreadyTakenError && <p>This email is already taken</p>}
        <input ref={password} type='password' placeholder='Password' />
        {passwordError && (
          <p>Password must contain special symbol, capital letter and digit</p>
        )}
        <input
          ref={confirmPassword}
          type='password'
          placeholder='Confirm Password'
        />
        {confirmPasswordError && <p>Passwords are not the same</p>}
        <input type='submit' value='Register' />
      </form>
      <div className={styles.Succeed}>
        {isSucceed && <p>You have been successfully registered</p>}
      </div>
    </div>
  );
};

export default Register;
