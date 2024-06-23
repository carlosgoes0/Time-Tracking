import React from 'react';
import styles from './Appointment.module.css';
import NavBar from '../components/navbar/NavBar';
import SectionContainer from '../components/section/section'



const Appointment = () => {
    return (
        <>
        <div className={styles.appointmentContainer}>
        <NavBar/>
        <SectionContainer/>
        </div>
        </>
    )
}

export default Appointment;
