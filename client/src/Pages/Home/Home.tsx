import styles from './Home.module.css';
import ExpandMore from '../../assets/Expand_more.svg';

const Home = () => {
  return (
    <div>
      <div className={styles.HomeBackground}>
        <img src={ExpandMore} alt='Expand more' />
      </div>
    </div>
  );
};

export default Home;
