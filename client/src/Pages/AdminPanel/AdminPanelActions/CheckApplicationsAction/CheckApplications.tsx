import styles from './CheckApplications.module.css';

const CheckApplications = () => {
  return (
    <div className={styles.CheckApplications}>
      <label>Full name</label>
      <div className={styles.Info}></div>
      <label>Age</label>
      <div className={styles.Info}></div>
      <label>Date of Birth</label>
      <div className={styles.Info}></div>
      <label>Email</label>
      <div className={styles.Info}></div>
      <div></div>

      <div className={styles.Buttons}>
        <button className={styles.Reject}>Reject</button>
        <button className={styles.Approve}>Approve</button>
      </div>
    </div>
  );
};

export default CheckApplications;
