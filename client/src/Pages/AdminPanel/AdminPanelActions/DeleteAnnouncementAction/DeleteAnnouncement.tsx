import styles from './DeleteAnnouncement.module.css';

const DeleteAnnounecement = () => {
  return (
    <div className={styles.DeleteAnnounecement}>
      <label>Announcement Title</label>
      <input type='text' />
      <button>Delete</button>
    </div>
  );
};

export default DeleteAnnounecement;
