import React from 'react';
import styles from './Appointment.module.css';
import NavBar from '../components/navbar/NavBar';
import SectionContainer from '../components/section/section'
import Modal from '../components/modal/Modal';
import SideBar from '../components/sidebar/SideBar';



const Appointment = () => {
    return (
        <>
        <div className={styles.appointmentContainer}>
        <NavBar/>
        <div className={styles.sectionData}>
        <SideBar/>
        <SectionContainer/>
        </div>
        </div>
        </>
    )
}

export default Appointment;
