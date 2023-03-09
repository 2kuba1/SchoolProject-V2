import styles from './AdminPanel.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import ExpandMoreImg from '../../assets/Expand_more.svg';

const AdminPanel = () => {
  useCloseMenu();
  return (
    <div className={styles.AdminPaenl}>
      <h1>Admin Panel</h1>
      <div className={styles.Action}>
        <p>Create Announecement</p>
        <img src={ExpandMoreImg} alt='expand more' />
      </div>
      <div className={styles.Action}>
        <p>Delete Announcement</p>
        <img src={ExpandMoreImg} alt='expand more' />
      </div>
      <div className={styles.Action}>
        <p>Check Applications</p>
        <img src={ExpandMoreImg} alt='expand more' />
      </div>
    </div>
  );
};

export default AdminPanel;
