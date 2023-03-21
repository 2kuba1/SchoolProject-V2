import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';
import styles from './CreateAnnouncement.module.css';
import { MoonLoader } from 'react-spinners';

const CreateAnnouncement = () => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const thumbnail = useRef<HTMLInputElement>(null);

  const imagesArr = new Array<FileList>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    imagesArr.push(e!.target!.files!);
  };

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const response = await axios.post<number>(
        'http://localhost:5259/announcements/createAnnouncement',
        {
          title: title.current?.value,
          description: description.current?.value,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      const thumbnailFormData = new FormData();
      thumbnailFormData.append('file', thumbnail!.current!.files![0]);

      await axios.post(
        `http://localhost:5259/announcements/addThumbnail/${response.data}`,
        thumbnailFormData,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (imagesArr.length === 0) return;
      const imagesFormData = new FormData();

      imagesArr.forEach(img => {
        imagesFormData.append('file', img[0]);
      });

      imagesFormData.forEach(async img => {
        await axios.post(
          `http://localhost:5259/announcements/addImage/${response.data}`,
          {
            file: img,
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={styles.CreateAnnouncement}>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' ref={title} />
        <label>Description</label>
        <textarea cols={60} rows={30} ref={description}></textarea>
        <label className={styles.SelectLabel}>Select Thumbnail</label>
        <input type='file' id='thumbnail' ref={thumbnail} />
        <label className={styles.SelectLabel}>Select Images</label>
        <input type='file' multiple id='images' onChange={handleFileChange} />
        {isPending ? (
          <MoonLoader size={40} color='#399F2E' />
        ) : (
          <input type='submit' value='Create' />
        )}
        {success && <p className={styles.Success}>Announcement created</p>}
        {error && <p>Something went wrong</p>}
      </form>
    </div>
  );
};

export default CreateAnnouncement;
