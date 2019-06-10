import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import SkillCard from "../SkillCard"
const Home = () => {
  return (
    <div>
      <div className={styles["container"]}>
        <video autoplay muted loop id="myVideo">
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles["text-container"]}>
          <h1>Tomorrow is for the Taking</h1>
          <h5>Thousands of classes to fuel your creativity and career.</h5>
          <Link className={styles["button"]}>
            <a>Get started for free</a>
          </Link>
        </div>
      </div>
      <div className={styles["main-content"]}>
        <h3>Unlimited Access to More Than 28,000 Classes</h3>

        <ul className={styles["category-container"]}>
          <li>All Categories</li>
          <li>Design</li>
          <li>Illustration</li>
          <li>Bussiness</li>
          <li>Technology</li>
          <li>Photo & Film</li>
          <li>Entrepreneurship</li>
          <li>Writing</li>
        </ul>

        <div style={{display:"flex",flexWrap:"wrap",justifyContent:'space-between'}}>
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />




        </div>
      </div>
    </div>
  );
};

export default Home;
