import React from 'react';
import styles from '../Styles/dashboard.module.css';

const CommonListCardComponent = ({cardData, type}) => {
    return (
        <div class={styles.card}>
            <h2>{cardData?.heading}</h2>
            {cardData?.details.map(each => {                
                if (type === 'appointments') return (
                    <div className={styles.eachAppointment}>
                        <div>{each.time}</div>
                        <div>{each.patientName}</div>
                        <div>{each.reason}</div>
                    </div>
                )
                if (type === 'patients') return (
                    <div className={styles.eachAppointment}>
                        <div>{each.name}</div>
                        <div>{each.lastVisit}</div>
                        <button className={styles.greenButton}>View Profile</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CommonListCardComponent;