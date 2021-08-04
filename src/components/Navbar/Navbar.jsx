import React from "react";
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
console.log(s);
// let c1 = "item";
// let c2 = "active";
// let classesNew = ${s.item} ${s.active};
const Navbar = () =>{
    return (
      <nav className = {s.nav1}>
        <div className = {s.item}>
          <NavLink to = "/profile" activeClassName = {s.activeLink}>
            Profile
          </NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/addMeasurement" activeClassName = {s.activeLink}>
            Add measurement
          </NavLink>
        </div>
        <div className = {`${s.item} ${s.active}`}>
          <NavLink to = "/reMeasurement" activeClassName = {s.activeLink}>
            Re-measurement
          </NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/designers" activeClassName = {s.activeLink}>
            Designers
          </NavLink>
        </div>
        <div className = {s.item}>
         <NavLink to = "/masters" activeClassName = {s.activeLink}>
            Masters
          </NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/archive" activeClassName = {s.activeLink}>
            Archive
          </NavLink>
        </div>
      </nav>
    );
}
    export default Navbar;