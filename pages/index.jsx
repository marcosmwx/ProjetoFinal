import React from "react";
import Activity from "../components/Activity/Activity";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Wavey from "../components/wave/Wavey";

import styles from "../styles/index.module.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <div className={styles.total}>
      <Wavey/>
      <Activity/>
      <hr className={styles.hr}/>
      <Footer/>
      </div>
    </div>
  );
}