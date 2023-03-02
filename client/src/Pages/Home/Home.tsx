import styles from './Home.module.css';
import ExpandMore from '../../assets/Expand_more.svg';
import Class from '../../assets/Class.png';
import MilitaryClassImg from '../../assets/MilitaryProfile.png';
import ComputerScienceImg from '../../assets/ComuterScience.png';
import GraphicDesignImg from '../../assets/GraphicDesign.png';
import LogisticImg from '../../assets/LogisticProfile.png';
import { useContext, useEffect, useRef } from 'react';
import Profiles, { profiles } from '../../Components/Profiles/Profiles';
import { NavbarContext } from '../../Contexts/NavbarContext';
import useCloseMenu from '../../Hooks/useCloseMenu';

const Home = () => {
  useCloseMenu();
  const ref = useRef<null | HTMLDivElement>(null);

  const handleScrollDown = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const profileArray: profiles[] = [
    {
      img: MilitaryClassImg,
      imgAlt: 'Military Class',
      header: 'Military Class',
      text: "A military profile is a record of a service member's military service, achievements, and assignments. It is used for career tracking, promotions, and retirement, and also serves as a resource for veterans to access their military records and benefits.",
    },
    {
      img: ComputerScienceImg,
      imgAlt: 'Computer Science Class',
      header: 'Computer Science Class',
      text: 'A high school computer science  profile teaches students the basics of programming languages like Python and Java, and focuses on building skills in software development and computer systems. It aims to prepare students for further study in computer science or related fields, or to provide them with valuable skills for their future careers.',
    },
    {
      img: GraphicDesignImg,
      imgAlt: 'Graphic Design Class',
      header: 'Graphic Design Class',
      text: 'Graphic design profiles in high school teach students the skills needed to create designs for print and digital media using digital tools and software like Adobe Photoshop, Illustrator, and InDesign. The goal is to prepare students for further study in graphic design or related fields or to provide them with valuable skills for their future careers.',
    },
    {
      img: LogisticImg,
      imgAlt: 'Logistic Class',
      header: 'Logistic Class',
      text: 'A logistics profile in high school teaches students about managing the movement of goods and services, optimizing transportation and logistics networks, and inventory control. The profile prepares students for further study in logistics or related fields or provides them with valuable skills for their future careers.',
    },
  ];

  return (
    <div className={styles.Home}>
      <div className={styles.HomeBackground}>
        <img onClick={handleScrollDown} src={ExpandMore} alt='Expand more' />
      </div>
      <div className={styles.Container}>
        <div className={styles.About}>
          <h1 className={styles.HomeHeader}>About</h1>
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
          <h1 className={styles.HomeHeader} ref={ref}>
            Profiles
          </h1>
          <div className={styles.ProfilesContainer}>
            {profileArray.map(data => (
              <Profiles
                header={data.header}
                img={data.img}
                imgAlt={data.imgAlt}
                text={data.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
