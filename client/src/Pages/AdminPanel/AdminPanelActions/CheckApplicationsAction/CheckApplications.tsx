import axios from 'axios';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import useAxios from '../../../../Hooks/useAxios';
import styles from './CheckApplications.module.css';

const CheckApplications = () => {
  type Data = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    dateOfBirth: string;
    email: string;
  };

  const [data, isPending, error, request] = useAxios<Data>({
    url: `http://localhost:5259/api/application/getLastApplication`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setData();
  }, [data]);

  const handleApprove = async (id: number) => {
    try {
      await axios.post(
        `http://localhost:5259/api/application/approveApplication?id=${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    request();
    setData();
  };

  const handleReject = async (id: number) => {
    try {
      await axios.post(
        `http://localhost:5259/api/application/rejectApplication?id=${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    request();
    setData();
  };

  const setData = () => {
    if (data) {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setAge(data.age.toString());
      setDateOfBirth(data.dateOfBirth);
      setEmail(data.email);
    } else {
      setFirstName('');
      setLastName('');
      setAge('');
      setDateOfBirth('');
      setEmail('');
    }
  };

  return (
    <div className={styles.CheckApplications}>
      {isPending && <MoonLoader size={40} color='#399F2E' />}
      <label>Full name</label>
      <div className={styles.Info}>{`${firstName} ${lastName}`}</div>
      <label>Age</label>
      <div className={styles.Info}>{age}</div>
      <label>Date of Birth</label>
      <div className={styles.Info}>{dateOfBirth}</div>
      <label>Email</label>
      <div className={styles.Info}>{email}</div>
      {error && (
        <div className={styles.Error}>There are no more applications</div>
      )}
      <div className={styles.Buttons}>
        <button
          className={styles.Reject}
          onClick={() => {
            if (typeof data !== 'undefined') {
              handleReject(data.id);
            }
          }}
        >
          Reject
        </button>
        <button
          className={styles.Approve}
          onClick={() => {
            if (typeof data !== 'undefined') {
              handleApprove(data.id);
            }
          }}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default CheckApplications;
