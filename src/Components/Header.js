import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/landing.module.css'

const HeaderComponent = () => {
    return (
        <>
        <header>
          <h1 className={styles.mainHead}>Bayer Healthcare</h1>  
          <div>
            <nav className={styles.navLinks}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Health Topics</Link>
                    </li>
                    <li>
                        <Link to="/">Resources</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
          </div>
          <div className={styles.secondHead}>
            <div className={styles.subHead1}>Your Health, Our Priority</div>
            <div className={styles.subHead2}>Explore the latest health information and resources from Bayer Healthcare</div>
          </div>
        </header>
        </>
    )
}

export default HeaderComponent;