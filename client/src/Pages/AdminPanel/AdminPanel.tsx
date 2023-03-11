import styles from './AdminPanel.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import ExpandMoreImg from '../../assets/Expand_more.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

const ExpandMoreButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.img
      src={ExpandMoreImg}
      alt='Expand more'
      animate={{ rotate: isExpanded ? -180 : 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
      onClick={() => setIsExpanded(!isExpanded)}
    />
  );
};

export default AdminPanel;
