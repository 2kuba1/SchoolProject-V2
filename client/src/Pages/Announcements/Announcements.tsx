import styles from './Announcements.module.css';
import { useEffect, useState } from 'react';
import Announcement from '../../Components/Announcement/Announcement';
import useAxios from '../../Hooks/useAxios';
import { Link } from 'react-router-dom';
import useCloseMenu from '../../Hooks/useCloseMenu';

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
  itemTo: number;
  totalItemsCount: number;
}

const Announcements = () => {
  useCloseMenu();
  let [pageNumber, setPageNumber] = useState<number>(1);

  const pageSize = 3;

  const [data, isPending, error, request] = useAxios<announcement>({
    url: `http://localhost:5259/getAnnouncements?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    method: 'GET',
  });

  console.log(data);

  useEffect(() => {
    request();
  }, [pageNumber]);

  const totalPages = data?.totalPages;

  return (
    <div>
      <div className={styles.Announcements}>
        {isPending && <div>Loading ...</div>}
        {data &&
          data.items.map(data => (
            <Link to={`/announcement/${data.id}`}>
              <Announcement
                creationDate={data.creationDate}
                id={data.id}
                title={data.title}
                thumbnailUrl={data.thumbnailUrl}
              />
            </Link>
          ))}
      </div>
      <div className={styles.Buttons}>
        <button
          className={
            pageNumber === totalPages && pageNumber - 2 > 0 ? '' : styles.Hidden
          }
          onClick={() => {
            if (pageNumber === totalPages) {
              setPageNumber((pageNumber -= 2));
            }
          }}
        >
          {pageNumber - 2}
        </button>
        <button
          className={pageNumber - 1 <= 0 ? styles.Hidden : ''}
          onClick={() => {
            if (pageNumber - 1 >= 0) {
              setPageNumber((pageNumber -= 1));
            }
          }}
        >
          {pageNumber - 1}
        </button>
        <button>{pageNumber}</button>
        <button
          className={pageNumber + 1 > totalPages! ? styles.Hidden : ''}
          onClick={() => {
            if (pageNumber + 1 <= data!.totalPages) {
              setPageNumber((pageNumber += 1));
            }
          }}
        >
          {pageNumber + 1}
        </button>
        <button
          className={
            pageNumber === 1 && pageNumber + 2 <= totalPages!
              ? ''
              : styles.Hidden
          }
          onClick={() => {
            if (pageNumber + 2 <= totalPages!) {
              setPageNumber((pageNumber += 2));
            }
          }}
        >
          {pageNumber + 2}
        </button>
        <p>of</p>
        <button
          onClick={() => {
            setPageNumber(data!.totalPages);
          }}
        >
          {data?.totalPages}
        </button>
      </div>
    </div>
  );
};

export default Announcements;
