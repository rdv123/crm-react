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
            Профиль
          </NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/addMeasurement" activeClassName = {s.activeLink}>
            Добавить замер
          </NavLink>
        </div>
        <div className = {`${s.item} ${s.active}`}>
          <NavLink to = "/reMeasurement" activeClassName = {s.activeLink}>
            Повторный замер
          </NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/designers" activeClassName = {s.activeLink}>
            Дизайнеры
          </NavLink>
        </div>
        <div className = {s.item}>
         <NavLink to = "/masters" activeClassName = {s.activeLink}>
            Мастера
          </NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/archive" activeClassName = {s.activeLink}>
            Архив
          </NavLink>
        </div>
      </nav>
    );
}
    export default Navbar;