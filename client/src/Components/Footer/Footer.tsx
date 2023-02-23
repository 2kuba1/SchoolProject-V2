import Logo from '../../assets/Logo.svg';
import GithubLogo from '../../assets/GithubLogo.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <img className={styles.FooterLogo} src={Logo} alt='Logo' />
        <a href='https://github.com/2kuba1/SchoolProject-V2' target='_blank'>
          <img src={GithubLogo} alt='Github Logo' />
        </a>
      </div>
      <p>Created by: Jakub Wojtyna</p>
    </footer>
  );
};

export default Footer;
