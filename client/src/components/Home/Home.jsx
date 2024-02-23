import styles from "./Home.module.css";
import Header from '../Header/Header'
import Dogs from "../Dogs/Dogs";


const Home = () => {
  return (
      <div className={styles.mainContainer}>
        {/* <div><Header /></div> */}
        <div><Dogs /></div>
      </div>
  );
};

export default Home;
