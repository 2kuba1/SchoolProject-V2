import { useRef } from 'react';
import useAxios from '../../Hooks/useAxios';
import useCloseMenu from '../../Hooks/useCloseMenu';
import styles from './Contact.module.css';
import { MoonLoader } from 'react-spinners';

const Contact = () => {
  useCloseMenu();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [data, isPending, error, request] = useAxios(
    {
      url: `http://127.0.0.1:8000/api/contact`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name: name.current?.value,
        email: email.current?.value,
        message: message.current?.value,
      },
    },
    false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    request();
  };

  return (
    <div className={styles.Contact}>
      <h1>
        Do you have any questions?
        <br />
        Contact us!
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input ref={name} type='text' placeholder='Name' />
        <input ref={email} type='email' placeholder="What's your email?" />
        <textarea
          ref={message}
          cols={30}
          rows={10}
          placeholder='Your question ...'
        ></textarea>
        <input type='submit' value='Send' />
        {isPending && <MoonLoader size={40} color='#399F2E' />}
        {error && <p className={styles.Error}>{error}</p>}
        {!isPending && !error && (
          <p className={styles.Success}>Message sent!</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
