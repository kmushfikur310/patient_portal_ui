import React from 'react'
import HeaderComponent from './Header';
import HealthTopicsCardComponent from '../Common/HealthTopicsCard';
import LatestNewsCardComponent from '../Common/LatestNewsCard'
import styles from '../Styles/landing.module.css';
import useFetch from '../Hooks/useFetch'

const DashboardComponent = () => {
    const { dashboardData, loading, error } = useFetch('https://run.mocky.io/v3/062aafe1-c5f8-4eea-9aef-570405ea602f');

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
            {loading && <h1>Loading...</h1>}
            {error &&  <p>Error: {error}</p>}
            {dashboardData && dashboardData?.healthTopics && displayHealthTopics()}
            {dashboardData && dashboardData?.healthTopics && displayHealthNews()}
           </div>
        </>
    )
}

export default DashboardComponent;