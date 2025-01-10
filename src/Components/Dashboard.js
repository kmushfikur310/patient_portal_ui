import styles from '../Styles/dashboard.module.css'
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
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
            <div className={styles.contentSection}>Content</div>  
          </div>  
        </>
    )
}

export default DashboardComponent;