import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import SkillCard from "../SkillCard"
import { Container, Row, Col } from 'reactstrap';
const Home = () => {
  return (
    <div>
      <div className={styles["container"]}>
        <video  autoPlay muted loop id="myVideo">
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

        <div className={styles.explore}>
            <button>
                Explore classes
            </button>
        </div>
       
      </div>
      <div style={{backgroundColor:"#fff",padding:"10px"}}>
        <Container >
            <Row>
                <Col sm="4" xs="12">
                    <img src="https://static.skillshare.com/assets/images/homepage/how-it-works/hand-picked.png" style={{width:"200px"}}/>
                </Col >

                <Col sm="4" xs="12">
                    <img src="https://static.skillshare.com/assets/images/homepage/how-it-works/hand-picked.png"  style={{width:"200px"}}/>
                </Col>


                <Col sm="4" xs="12">
                    <img src="https://static.skillshare.com/assets/images/homepage/how-it-works/hand-picked.png"  style={{width:"200px"}}/>
                </Col>
            </Row>
        </Container>
        </div>
        <div style={{width:"100vw"}}>
            <Container>
                <Row>
                    <Col sm="3" xs="12">
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Affiliates</li>
                        </ul>
                    </Col>

                    <Col sm="3" xs="12">
                        <ul>
                            <li>Community</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Affiliates</li>
                        </ul>
                    </Col>

                    <Col sm="3" xs="12">
                        <ul>
                            <li>Teaching</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Affiliates</li>
                        </ul>
                    </Col>

                    <Col sm="3" xs="12">
                        <ul>
                            <li>Mobile</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Affiliates</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
};

export default Home;
