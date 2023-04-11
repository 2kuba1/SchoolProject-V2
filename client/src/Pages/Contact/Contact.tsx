import useCloseMenu from '../../Hooks/useCloseMenu';
import styles from './Contact.module.css';

const Contact = () => {
  useCloseMenu();
  return (
    <div className={styles.Contact}>
      <h1>
        Do you have any questions?
        <br />
        Contact us!
      </h1>
      <form>
        <input type='text' placeholder='First name' />
        <input type='email' placeholder="What's your email?" />
        <textarea
          cols={30}
          rows={10}
          placeholder='Your question ...'
        ></textarea>
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};

export default Contact;
