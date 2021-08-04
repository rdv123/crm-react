import React from "react"
import s from './Profile.module.css';
import MyProjekt from "./MyProjekt/MyProjekt";
import Measurement from "./Measurement/Measurement";
const Profile = (props) =>{
  
    return (
    <div className = {s.content}>
      <Measurement/>
      <MyProjekt projektData = {props.projektData.posts }
     
                newProjektText ={props.projektData.newProjektText} />
    </div>
  )

}
    export default Profile;