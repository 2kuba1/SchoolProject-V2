import styles from './Home.module.css';
import ExpandMore from '../../assets/Expand_more.svg';
import Class from '../../assets/Class.png';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeBackground}>
        <img src={ExpandMore} alt='Expand more' />
      </div>
      <div className={styles.Container}>
        <div className={styles.About}>
          <h1>About</h1>
          <div className={styles.AboutContainer}>
            <div className={styles.AboutImgParent}>
              <img className={styles.AboutImg} src={Class} alt='Class' />
            </div>
            <p className={styles.AboutText}>
              Welcome to our high school! We provide a personalized and
              inclusive educational experience for students who want to explore
              their passions and interests. Our experienced instructors offer a
              variety of core and elective courses, and our supportive community
              helps students build lasting friendships. Join us for a unique and
              fulfilling high school experience at our physical campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
