import React from 'react';
import styles from './SideBar.module.css';
import LogoFapesp from '../../utils/assets/Img-Logo-FAPESP.png'
import ButtonMenu from './../buttons/ButtonMenu'
import ButtonMenuExit from '../buttons/ButtonMenuExit';
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineUpdate } from "react-icons/md";
import { LuAlertCircle } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";


function SideBar() {
  return (
    <div className={styles.sidebarContainer}>
      
      <div className={styles.menuItems}>
      <ButtonMenu icon={PiUsersThree} text={"Usuários"}/>
      <ButtonMenu icon={MdOutlineUpdate} text={"Apontamentos"}/>
      <ButtonMenu icon={MdOutlineDateRange} text={"Feriados"}/>
      <ButtonMenu icon={LuAlertCircle} text={"Ocorrências"}/>
      </div>
      <div className={styles.buttonExit}>
      <ButtonMenuExit icon={LuAlertCircle} text={"Sair"}/>
      </div>
    </div>
  );
}

export default SideBar;
