import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import useAxios from '../../Hooks/useAxios';
import styles from './Comments.module.css';
import { UserContext } from '../../Context/UserContext';
import { IsLoggedContext } from '../../Context/IsLoggedContext';
import useRelog from '../../Hooks/useRelog';

interface GetComments {
  id: number;
  name: string;
  content: string;
  creationDate: string;
}

const Comments = () => {
  useRelog();
  const { IsLogged } = useContext(IsLoggedContext);
  const { id } = useParams();
  const { User } = useContext(UserContext);
  const [textAreaData, setTextAreaData] = useState('');
  const [data, isPending, error, request] = useAxios<GetComments[]>({
    url: `http://localhost:5259/api/comments/getComments/${id}`,
    method: 'GET',
  });

  const [data2, isPending2, error2, request2] = useAxios(
    {
      method: 'POST',
      url: `http://localhost:5259/api/comments/addComment/${id}`,
      data: {
        content: textAreaData,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
    false
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      textAreaData === null ||
      textAreaData.length < 3 ||
      textAreaData.length > 150
    ) {
      throw new Error(
        'Comment message mist be longer than 3 and shorter than 150 letters'
      );
    }
    request2();
  };

  useEffect(() => {
    request();
  }, [isPending2]);

  if (error2) console.log(error2);
  return (
    <div className={styles.Comments}>
      {isPending && <MoonLoader size={40} color='#399F2E' />}
      {error && (
        <p className={styles.NoComents}>
          This announcement doesn't have any comments
        </p>
      )}
      <h2>Add comment</h2>
      {IsLogged.isLogged ? (
        <form onSubmit={e => handleSubmit(e)}>
          <textarea
            cols={30}
            rows={3}
            onChange={e => setTextAreaData(e.target.value)}
          ></textarea>
          <input className={styles.Submit} type='submit' value='Send' />
        </form>
      ) : (
        <p className={styles.IsNotLogged}>
          You have to be logged in to add comment
        </p>
      )}
      {data && (
        <>
          <div className={styles.Container}>
            {data.map(data => (
              <div key={data.id} className={styles.Content}>
                <hr color='#222' />
                <span className={styles.Name}>{data.name}</span>
                <span className={styles.TextContent}>{data.content}</span>
                <span className={styles.Date}>{data.creationDate}</span>
              </div>
            ))}
          </div>
        </>
      )}
      {isPending2 && <MoonLoader size={40} color='#399F2E' />}
    </div>
  );
};

export default Comments;
