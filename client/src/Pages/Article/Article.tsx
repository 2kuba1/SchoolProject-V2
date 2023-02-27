import { useParams } from 'react-router-dom';
import useAxios from '../../Hooks/UseAxios';
import styles from './Article.module.css';

type article = {
  title: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
};

const Article = () => {
  const { id } = useParams();

  const [data, isPending, error, request] = useAxios<article>({
    url: `http://localhost:5259/getAnnouncementBody/${id}`,
    method: 'GET',
  });

  if (!data) return null;

  return (
    <div className={styles.ArticleContainer}>
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
    </div>
  );
};

export default Article;
