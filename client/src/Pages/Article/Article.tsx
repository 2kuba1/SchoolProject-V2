import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import Comments from '../../Components/Comments/Commets';
import useAxios from '../../Hooks/useAxios';
import useCloseMenu from '../../Hooks/useCloseMenu';
import styles from './Article.module.css';

type article = {
  title: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
};

const Article = () => {
  useCloseMenu();
  const { id } = useParams();

  const [data, isPending, error, request] = useAxios<article>({
    url: `http://localhost:5259/getAnnouncementBody/${id}`,
    method: 'GET',
  });

  return (
    <div className={styles.ArticleContainer}>
      {isPending && <MoonLoader size={40} color='#399F2E' />}
      {error && <p className={styles.Error}>{error}</p>}
      <h1>{data && data.title}</h1>
      <div className={styles.ParagraphAndImage}>
        <p className={styles.Description}>{data && data.description}</p>
        <img
          className={styles.Thumbnail}
          src={data?.thumbnailUrl}
          alt={data?.title}
        />
      </div>
      <div className={styles.Images}>
        {data &&
          data.images.map(image => (
            <img className={styles.Image} src={image} alt='imgae' />
          ))}
      </div>
      <hr color='#399f2e' className={styles.Line}/>
      <Comments/>
    </div>
  );
};

export default Article;
