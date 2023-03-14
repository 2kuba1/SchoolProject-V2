import useAxios from '../../../../Hooks/useAxios';
import styles from './DeleteAnnouncement.module.css';
import { MoonLoader } from 'react-spinners';
import GetAllAnnouncements from '../../../../Types/GetAllAnnouncements';

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
  return (
    <div className={styles.GetAllAnnouncements}>
      <div className={styles.Announcement}>
        <img src={thumbnailUrl} alt='thumbnail' />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DeleteAnnounecement;
