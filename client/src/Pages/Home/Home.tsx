import styles from './Home.module.css';
import ExpandMore from '../../assets/Expand_more.svg';
import Class from '../../assets/Class.png';
import MilitaryClassImg from '../../assets/MilitaryProfile.png';
import ComputerScienceImg from '../../assets/ComuterScience.png';
import GraphicDesignImg from '../../assets/GraphicDesign.png';
import LogisticImg from '../../assets/LogisticProfile.png';

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
        <div className={styles.Profiles}>
          <h1>Profiles</h1>
          <div className={styles.ProfilesContainer}>
            <div className={`${styles.Military} ${styles.Resize}`}>
              <img
                className={styles.ClassImage}
                src={MilitaryClassImg}
                alt='Military Class'
              />
              <div>
                <h2 className={styles.ClassHeader}>Military Class</h2>
                <p className={styles.ClassText}>
                  A military profile is a record of a service member's military
                  service, achievements, and assignments. It is used for career
                  tracking, promotions, and retirement, and also serves as a
                  resource for veterans to access their military records and
                  benefits.
                </p>
              </div>
            </div>
            <div className={`${styles.ComputerScience} ${styles.Resize}`}>
              <img
                className={styles.ClassImage}
                src={ComputerScienceImg}
                alt='Computer Science Class'
              />
              <div>
                <h2 className={styles.ClassHeader}>Computer Science Class</h2>
                <p className={styles.ClassText}>
                  A high school computer science profile teaches students the
                  basics of programming languages like Python and Java, and
                  focuses on building skills in software development and
                  computer systems. It aims to prepare students for further
                  study in computer science or related fields, or to provide
                  them with valuable skills for their future careers.
                </p>
              </div>
            </div>
            <div className={`${styles.ComputerScience} ${styles.Resize}`}>
              <img
                className={styles.ClassImage}
                src={GraphicDesignImg}
                alt='Graphic Design Class'
              />
              <div>
                <h2 className={styles.ClassHeader}>Graphic Design</h2>
                <p className={styles.ClassText}>
                  Graphic design profiles in high school teach students the
                  skills needed to create designs for print and digital media
                  using digital tools and software like Adobe Photoshop,
                  Illustrator, and InDesign. The goal is to prepare students for
                  further study in graphic design or related fields or to
                  provide them with valuable skills for their future careers.
                </p>
              </div>
            </div>
            <div className={`${styles.Logistic} ${styles.Resize}`}>
              <img
                className={styles.ClassImage}
                src={LogisticImg}
                alt='Logistic Class'
              />
              <div>
                <h2 className={styles.ClassHeader}>Logistic Class</h2>
                <p className={styles.ClassText}>
                  A logistics profile in high school teaches students about
                  managing the movement of goods and services, optimizing
                  transportation and logistics networks, and inventory control.
                  The profile prepares students for further study in logistics
                  or related fields or provides them with valuable skills for
                  their future careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
