import styles from './CreateAnnouncement.module.css';

const CreateAnnouncement = () => {
  return (
    <div className={styles.CreateAnnouncement}>
      <form>
        <label>Title</label>
        <input type='text' />
        <label>Description</label>
        <textarea cols={60} rows={30}></textarea>
        <label htmlFor='thumbnail' className={styles.SelectLabel}>
          Select Thumbnail
        </label>
        <input type='file' id='thumbnail' style={{ display: 'none' }} />
        <label htmlFor='images' className={styles.SelectLabel}>
          Select Images
        </label>
        <input type='file' multiple id='images' style={{ display: 'none' }} />
        <input type='submit' value='Create' />
      </form>
    </div>
  );
};

export default CreateAnnouncement;
