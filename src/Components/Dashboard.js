import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/dashboard.module.css";
import CommonListCardComponent from "../Common/CommonCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { get, post } from "../Utils/api";

const DashboardComponent = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "John",
    appointmentData: {
      heading: "Today's Appointments",
      details: [
        {
          time: "9:00 AM",
          patientName: "John Doe",
          reason: "Annula Check-up",
        },
        {
          time: "10:30 AM",
          patientName: "Jane Smith",
          reason: "Follow-up",
        },
      ],
    },
    patientsData: {
      heading: "Recent Patients",
      details: [
        {
          name: "Alice Johnson",
          lastVisit: "2023-06-01",
        },
        {
          name: "Bob Williams",
          lastVisit: "2023-05-28",
        },
      ],
    },
  });
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };
  // https://run.mocky.io/v3/f9ea2727-fafe-44a7-963c-c084714ecb82

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/f9ea2727-fafe-44a7-963c-c084714ecb82"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navSection}>
          <div className={styles.navSectionHeader}>Bayer Health</div>
          <nav className={styles.navSectionLinks}>
            <ul>
              <li>
                <Link
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Dashboard
                </Link>
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
                <Button
                  style={{ color: "#FFF", textTransform: "capitalize" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        {userData && (
          <div className={styles.contentSection}>
            <div className={styles.contentHeading}>
              Welcome, {userData?.name}
            </div>
            <CommonListCardComponent
              cardData={userData?.appointmentData}
              type="appointments"
            />
            <CommonListCardComponent
              cardData={userData?.patientsData}
              type="patients"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardComponent;
