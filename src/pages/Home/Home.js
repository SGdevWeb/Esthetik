import React from "react";
import styles from "./Home.module.scss";
import Location from "./components/Location";
import Presentation from "./components/Presentation";
import image from "../../assets/images/imageHome.jpg";

function Home() {
  return (
    <div className={styles.container}>
      <Presentation />
      <Location />
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="arrière plan" />
        <div className={styles.mask}></div>
      </div>
    </div>
  );
}

export default Home;
