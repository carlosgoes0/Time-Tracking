import React from 'react';
import styles from './Appointment.module.css';
import NavBar from '../components/navbar/NavBar';
import SectionUser from '../components/sections/sectionUser'
import SideBar from '../components/sidebar/SideBar';



const Appointment = () => {
    return (
        <>
        <div className={styles.appointmentContainer}>
        <NavBar/>
        <div className={styles.sectionData}>
        <SideBar/>
        <SectionUser/>
        </div>
        </div>
        </>
    )
}

export default Appointment;
