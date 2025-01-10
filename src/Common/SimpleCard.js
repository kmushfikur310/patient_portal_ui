import React from 'react';
import styles from '../Styles/dashboard.module.css';

const SimpleCardComponent = ({cardData}) => {
    console.log('cardData', cardData);
    return (
        <div class={styles.card}>
            <h2>{cardData?.appointmentHead}</h2>
            {cardData?.appointments.map(each => {                
                return <p>{each}</p>
            })}
        </div>
    )
}

export default SimpleCardComponent;