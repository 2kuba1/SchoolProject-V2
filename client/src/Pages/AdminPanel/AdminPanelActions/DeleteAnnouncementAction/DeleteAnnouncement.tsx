import useAxios from '../../../../Hooks/useAxios';
import styles from './DeleteAnnouncement.module.css';
import { MoonLoader } from 'react-spinners';
import GetAllAnnouncements from '../../../../Types/GetAllAnnouncements';
import DeleteButtonImg from '../../../../assets/DleetButton.png';
import axios from 'axios';

const DeleteAnnounecement = () => {
  const [data, isPending, error, request] = useAxios<GetAllAnnouncements[]>({
    url: 'http://localhost:5259/announcements/getAll',
    method: 'GET',
  });

  console.log(data);

  return (
    <div className={styles.DeleteAnnounecement}>
      <div>
        {isPending && <MoonLoader size={40} color='#399F2E' />}
        {data &&
          data.map(announcement => (
            <GetAnnouncements
              creationDate={announcement.creationDate}
              thumbnailUrl={announcement.thumbnailUrl}
              title={announcement.title}
              key={announcement.id}
              id={announcement.id}
            />
          ))}
      </div>
    </div>
  );
};

const GetAnnouncements = ({
  id,
  title,
  creationDate,
  thumbnailUrl,
}: GetAllAnnouncements) => {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5259/deleteAnnouncement/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      window.location.reload();
    }
  };

  return (
    <div className={styles.GetAllAnnouncements}>
      <div className={styles.Announcement}>
        <img src={thumbnailUrl} alt='thumbnail' />
        <p>{title}</p>
        <div className={styles.DeleteButtonParent}>
          <button
            className={styles.DeleteButton}
            onClick={() => {
              handleDelete(id);
            }}
          >
            <img src={DeleteButtonImg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAnnounecement;
