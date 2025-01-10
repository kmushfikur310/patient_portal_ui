import React, { useState, useEffect } from 'react';
import styles from '../Styles/dashboard.module.css';
import CommonListCardComponent from '../Common/CommonCard';
import { Link } from 'react-router-dom';
import { get, post } from '../Utils/api';


const DashboardComponent = () => {
    const [userData, setUserData] = useState({
        name: 'John',
        appointmentData :{
            heading: "Today's Appointments",
            details: [
                {
                    time: '9:00 AM',
                    patientName: 'John Doe',
                    reason: 'Annula Check-up'
                },
                {
                    time: '10:30 AM',
                    patientName: 'Jane Smith',
                    reason: 'Follow-up'
                },
            ]
        },
        patientsData: {
            heading: "Recent Patients",
            details: [
                {
                    name: 'Alice Johnson',
                    lastVisit: '2023-06-01',
                },
                {
                    name: 'Bob Williams',
                    lastVisit: '2023-05-28'
                }
            ]
        }
    });

    useEffect(() => {


        const fetchData = async () => {
            try {
              const response = await get('http://localhost:8080/api/appointment/getTodaysAppointments'); 
              setUserData(response.data)
            } catch (err) {
              console.error(err);
            } finally {
            
            }
          };
      
          fetchData();
    },[])

    // https://run.mocky.io/v3/f9ea2727-fafe-44a7-963c-c084714ecb82

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
                <CommonListCardComponent cardData={userData?.appointmentData} type='appointments'/> 
                <CommonListCardComponent cardData={userData?.patientsData} type='patients'/>   
            </div>}
          </div>  
        </>
    )
}

export default DashboardComponent;