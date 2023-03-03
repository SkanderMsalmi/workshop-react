import styles from './Home.module.css';
import img from '../assets/images/welcome.png';

const Home = ()=>{
    return (
        <div className={styles.welcome}>
            <img src={img} alt="welcome"  />
        </div>
    );
}

export default Home;