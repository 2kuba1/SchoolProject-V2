import styles from './Announcement.module.css';
import { FC } from 'react';

interface announcemetProps {
  id: number;
  title: string;
  creationDate: string;
  thumbnailUrl: string;
}

const Announcement: FC<announcemetProps> = props => {
  return (
    <div className={styles.Announcement}>
      <div className={styles.AnnouncementWrapper}>
        <div className={styles.ImgWrapper}>
          <img
            className={styles.AnnouncementImg}
            src={props.thumbnailUrl}
            alt='Announcement Thumbnail'
          />
        </div>
        <div className={styles.TextContent}>
          <h1>{props.title}</h1>
          <span>{props.creationDate.substring(0, 10)}</span>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
