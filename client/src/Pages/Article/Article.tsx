import { useParams } from 'react-router-dom';
import useAxios from '../../Hooks/UseAxios';

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
    <div>
      <h1>{data && data.title}</h1>
      <div>
        <p>{data && data.description}</p>
        <img src={data?.thumbnailUrl} alt={data?.title} />
      </div>
      <div>
        {data && data.images.map(image => <img src={image} alt='imgae' />)}
      </div>
    </div>
  );
};

export default Article;
