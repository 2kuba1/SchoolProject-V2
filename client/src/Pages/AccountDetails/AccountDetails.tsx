import styles from './AccountDetails.module.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import useCloseMenu from '../../Hooks/useCloseMenu';
import useRelog from '../../Hooks/useRelog';
import AccountImg from '../../assets/Account_circle.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
  useCloseMenu();
  useRelog();

  const { User } = useContext(UserContext);
  const [application, setApplication] = useState('Unknown');

  useEffect(() => {
    const setData = async () => {
      const response = await axios.get<string>(
        'http://localhost:5259/api/account/getApplicationStatus',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setApplication(response.data);
    };
    setData();
  }, []);

  return (
    <div className={styles.AccountDetails}>
      <div>
        <img src={AccountImg} alt='Account image' />
        <h1>{`${User.FirstName} ${User.LastName}`}</h1>
        <div>
          <div className={styles.ApplicationStatus}>
            <h2>Status of application:</h2>
            <p
              className={
                application === 'Approved'
                  ? styles.Approved
                  : application === 'Rejected'
                  ? styles.Rejected
                  : styles.Unknown
              }
            >
              {application}
            </p>
          </div>
        </div>
        {User.Role === 'Admin' && (
          <Link to='/adminPanel' className={styles.AdminPanel}>
            Admin Panel
          </Link>
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
