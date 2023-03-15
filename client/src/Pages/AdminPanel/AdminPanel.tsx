import styles from './AdminPanel.module.css';
import useCloseMenu from '../../Hooks/useCloseMenu';
import ExpandMoreButton from './ExpandMoreButton/ExpandMoreButton';
import { useState } from 'react';
import { motion } from 'framer-motion';
import DeleteAnnounecement from './AdminPanelActions/DeleteAnnouncementAction/DeleteAnnouncement';
import CheckApplications from './AdminPanelActions/CheckApplicationsAction/CheckApplications';
import CreateAnnouncement from './AdminPanelActions/CreateAnnouncementAction/CreateAnnouncement';

const AdminPanel = () => {
  useCloseMenu();

  let pageHeight = getComputedStyle(document.documentElement).getPropertyValue(
    '--AdminPanelHeight'
  );

  const [createAnnouncementExpand, setCreateAnnouncementExpand] =
    useState(false);

  const [deleteAnnouncementExpand, setDeleteAnnouncementExpand] =
    useState(false);

  const [checkApplicationsExpand, setCheckApplicationsExpand] = useState(false);

  const resizePage = (isOpened: boolean, height: number) => {
    const indexOfPx = pageHeight.indexOf('px');
    let newHeight: number;

    isOpened
      ? (newHeight = Number(pageHeight.slice(0, indexOfPx)) - height)
      : (newHeight = Number(pageHeight.slice(0, indexOfPx)) + height);

    document.documentElement.style.setProperty(
      '--AdminPanelHeight',
      newHeight + 'px'
    );
  };

  return (
    <div className={styles.AdminPaenl}>
      <h1>Admin Panel</h1>
      <div className={styles.Action}>
        <p>Create Announecement</p>
        <div
          onClick={() => {
            setCreateAnnouncementExpand(!createAnnouncementExpand);
            resizePage(createAnnouncementExpand, 900);
          }}
          className={styles.ExpandMoreButton}
        >
          <ExpandMoreButton />
        </div>
        <motion.div
          animate={{
            height: createAnnouncementExpand ? 900 : 0,
            opacity: createAnnouncementExpand ? 1 : 0,
          }}
        >
          <div
            className={
              createAnnouncementExpand ? styles.Visible : styles.Hidden
            }
          >
            <CreateAnnouncement />
          </div>
        </motion.div>
      </div>
      <div className={styles.Action}>
        <p>Delete Announcement</p>
        <div
          onClick={() => {
            setDeleteAnnouncementExpand(!deleteAnnouncementExpand);
            resizePage(deleteAnnouncementExpand, 300);
          }}
          className={styles.ExpandMoreButton}
        >
          <ExpandMoreButton />
        </div>
        <motion.div
          animate={{
            height: deleteAnnouncementExpand ? 300 : 0,
            opacity: deleteAnnouncementExpand ? 1 : 0,
          }}
        >
          <div
            className={
              deleteAnnouncementExpand ? styles.Visible : styles.Hidden
            }
          >
            <DeleteAnnounecement />
          </div>
        </motion.div>
      </div>
      <div className={styles.Action}>
        <p>Check Applications</p>
        <div
          onClick={() => {
            setCheckApplicationsExpand(!checkApplicationsExpand);
            resizePage(checkApplicationsExpand, 550);
          }}
          className={styles.ExpandMoreButton}
        >
          <ExpandMoreButton />
        </div>
        <motion.div
          animate={{
            height: checkApplicationsExpand ? 550 : 0,
            opacity: checkApplicationsExpand ? 1 : 0,
          }}
        >
          <div
            className={checkApplicationsExpand ? styles.Visible : styles.Hidden}
          >
            <CheckApplications />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
