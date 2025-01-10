import React, { useState } from 'react';
import styles from '../Styles/dashboard.module.css';
import SimpleCardComponent from  '../Common/SimpleCard'
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
    const [userData, setUserData] = useState({
        name: 'John',
        appointmentData :{
            appointmentHead: 'Upcoming Appointments',
            appointments: [
                'Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM',
                'Following: Dr. Johnson on June 22, 2023 at 2:00 PM'
            ]
        }
    });
    return (
        <>
          <div className={styles.container}>
            <div className={styles.navSection}>
                <div className={styles.navSectionHeader}>Bayer Health</div>
                <nav className={styles.navSectionLinks}>
                    <ul>
                        <li>
                            <Link to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/">Appointments</Link>
                        </li>
                        <li>
                            <Link to="/">Health Records</Link>
                        </li>
                        <li>
                            <Link to="/">Messages</Link>
                        </li>
                        <li>
                            <Link to="/login">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {userData && <div className={styles.contentSection}>
                <div className={styles.contentHeading}>Welcome, {userData?.name}</div> 
                <SimpleCardComponent cardData={userData?.appointmentData}/>   
            </div>}
          </div>  
        </>
    )
}

export default DashboardComponent;