import styles from './AdminPanel.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import ExpandMoreButton from './ExpandMoreButton/ExpandMoreButton';

const AdminPanel = () => {
  useCloseMenu();
  return (
    <div className={styles.AdminPaenl}>
      <h1>Admin Panel</h1>
      <div className={styles.Action}>
        <p>Create Announecement</p>
        <ExpandMoreButton />
      </div>
      <div className={styles.Action}>
        <p>Delete Announcement</p>
        <ExpandMoreButton />
      </div>
      <div className={styles.Action}>
        <p>Check Applications</p>
        <ExpandMoreButton />
      </div>
    </div>
  );
};

export default AdminPanel;
