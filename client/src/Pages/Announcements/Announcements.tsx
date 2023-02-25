import styles from './Announcements.module.css';
import { useState } from 'react';
import Announcement from '../../Components/Announcement/Announcement';
import useAxios from '../../Hooks/UseAxios';

interface items {
  id: number;
  title: string;
  creationDate: string;
  thumbnailUrl: string;
}

interface announcement {
  items: items[];
  totalPages: number;
  itemFrom: number;
  totalItemsCount: number;
}

const Announcements = () => {
  const [pageNumber, setPageNUmber] = useState<number>(1);
  const pageSize = 3;

  const [data, isPending, error, request] = useAxios<announcement>({
    url: `http://localhost:5259/getAnnouncements?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    method: 'GET',
  });

  console.log(data);

  return (
    <div className={styles.Announcements}>
      {isPending && <div>Loading ...</div>}
      {data &&
        data.items.map(data => (
          <Announcement
            creationDate={data.creationDate}
            id={data.id}
            title={data.title}
            thumbnailUrl={data.thumbnailUrl}
          />
        ))}
    </div>
  );
};

export default Announcements;
