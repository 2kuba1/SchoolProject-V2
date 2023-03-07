import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import useCloseMenu from '../../Hooks/useCloseMenu';
import useRelog from '../../Hooks/useRelog';
import AccountImg from '../../assets/Account_circle.svg';
import axios from 'axios';

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
    <div>
      <img src={AccountImg} alt='Account image' />
      <p>{`${User.FirstName} ${User.LastName}`}</p>
      <div>
        <div>
          <h2>Status of application:</h2>
          <p>{application}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
