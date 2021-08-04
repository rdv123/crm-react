import React from "react"
import s from './MyProjekt.module.css';
import Projekt1 from "../Projekt1/Projekt1";

const MyProjekt = (props) =>{
  
  let projekts = props.projektData.map(pr => 
  <Projekt1 img = {pr.img} 
            address = {pr.address} 
            contacts = {pr.contacts}
            name = {pr.name} 
            objectDescription = {pr.objectDescription} 
            comments = {pr.comments}/>
          );
  
  return (
    <div>
      {projekts}
    </div>
  )

}
    export default MyProjekt;