import React from 'react'
import styles from  "./navbar.module.css"
import { Link } from "react-router-dom"
const Navbar = () =>{
    return(
        <div className={styles["navbar-container"]}>
           <div  style={{
              display:"flex",
             
              alignItems:'center',
              justifyContent:"space-between"
              
          }}>
           <Link className={styles["brand-style"]} to="/" >SKILLSHARE</Link>
           <Link className={styles["link-style"]}>
                Browse
           </Link>
           <input className={styles['input']} placeholder="Search for courses" />
           </div>
          <div style={{
              display:"flex",
              minWidth:"15rem",
              alignItems:'center',
              justifyContent:"flex-end"
              
          }}>
           <Link className={styles["link-style"]}>
           signin
           </Link>

           <Link className={styles['signup']}>
            sign Up
           </Link>
           </div>
           
          
        </div>
    )
}

export default Navbar