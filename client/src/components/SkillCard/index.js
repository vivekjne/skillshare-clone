import React from 'react'
import styles from './skillcard.module.css'
import { Link } from 'react-router-dom'
export default () =>(
    <div className={styles['card-container']}>
        <div className={styles['card-img']}></div>
        <div style={{padding:"5px"}}>
            <div  style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
            <img src="https://static.skillshare.com/uploads/video/thumbnails/25018f1aada2a9c55ffb98ddf7c86aa0/448-252"
            style={{width:"24px",height:"24px",borderRadius:"12px"}}
            ></img>
            <span style={{fontSize:"10px",color:"#777"}}>51 min</span>
            </div>
            <div style={{marginTop:"20px"}}>
            <Link className={styles['class-link']} to="/classes/test"><span>Going Freelance: Building and Branding Your Own Success</span>
            </Link>

            </div>
            <Link className={styles['author']}>
            <a >John Doe</a>
            </Link>
        </div>
    </div>
)