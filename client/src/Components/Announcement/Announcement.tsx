import { FC } from 'react';

interface announcemetProps {
  id: number;
  title: string;
  creationDate: string;
  thumbnailUrl: string;
}

const Announcement: FC<announcemetProps> = props => {
  return (
    <div>
      <div>
        <img src={props.thumbnailUrl} alt='Announcement Thumbnail' />
      </div>
      <h1>{props.title}</h1>
      <span>{props.creationDate.substring(0, 10)}</span>
    </div>
  );
};

export default Announcement;
