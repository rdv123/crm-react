import React from "react"
import s from './Measurement.module.css';
const Measurement = () =>{
    return (
    
      <div className = {s.blok1}>
          <div className = {s.planned}>
            Planned measurement
          </div>
          <div className = {s.work}>
            In work
          </div>
          <div className = {s.contract}>
            Contract
          </div>
      </div>  
   
  )

}
    export default Measurement;