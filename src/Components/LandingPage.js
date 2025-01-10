import React, { useEffect, useState } from 'react'
import HeaderComponent from './Header';
import HealthTopicsCardComponent from '../Common/HealthTopicsCard';
import LatestNewsCardComponent from '../Common/LatestNewsCard'
import styles from '../Styles/landing.module.css';
import { get, post } from '../Utils/api';

const DashboardComponent = () => {
    const [ dashboardData, setDashboardData ] = useState({
        healthTopics: [
            {
                heading: 'head 1',
                description: ' desc 1',
                learnMoreLink: 'link'
            },
            {
                heading: 'head 2',
                description: ' desc 1',
                learnMoreLink: 'link'
            },
            {
                heading: 'head 3',
                description: ' desc 1',
                learnMoreLink: 'link'
            },
            {
                heading: 'head 4',
                description: ' desc 1',
                learnMoreLink: 'link'
            },
        ],
        healthNews: [
            {
                heading: ' News 1',
                description: ' news desc',
                articleLink: 'link'
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await get('/people'); 
            console.log('response :: ', response.data)
          } catch (err) {
            console.error(err);
          } finally {
          
          }
        };
    
        fetchData();
      }, [])

    const displayHealthTopics = () => {
        return (
            <div className={styles.topicsSection}>
                <div className={styles.sideHead}>Featured Health Topics</div>
                <div className={styles.topicContainer}>
                    { dashboardData?.healthTopics.map((each) => {
                        return <HealthTopicsCardComponent cardData={each}/>
                    })}
                </div>
            </div>
        )
    }

    const displayHealthNews = () => {
        return (
            <div className={styles.newsSection}>
                <div className={styles.sideHead}>Latest Health News</div>
                <div className={styles.newsContainer}>
                    { dashboardData?.healthNews.map((each) => {
                        return <LatestNewsCardComponent cardData={each}/>
                    })}
                </div>
            </div>
 
        )
    }

    return (
        <>
           <HeaderComponent />
           <div className={styles.container}>
            {dashboardData && dashboardData?.healthTopics && displayHealthTopics()}
            {dashboardData && dashboardData?.healthTopics && displayHealthNews()}
           </div>
        </>
    )
}

export default DashboardComponent;