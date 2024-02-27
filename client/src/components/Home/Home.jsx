import styles from "./Home.module.css";
import Dogs from "../Dogs/Dogs";
import Nav from "../Nav/Nav";


const Home = () => {
  return (
      <div className={styles.mainContainer}>
        <div><Nav/></div>
        <div><Dogs /></div>
      </div>
  );
};

export default Home;
