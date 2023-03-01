import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (<div className={styles.NotFound}> 
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>)
  };
  
  export default NotFound;
  