import styles from './Profiles.module.css';
import { FC } from 'react';
import { profiles } from '../../Types/Profiles';

const Profiles: FC<profiles> = props => {
  return (
    <>
      <div className={`${styles.Profile} ${styles.Resize}`}>
        <img className={styles.ClassImage} src={props.img} alt={props.imgAlt} />
        <div>
          <h2 className={styles.ClassHeader}>{props.header}</h2>
          <p className={styles.ClassText}>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Profiles;
