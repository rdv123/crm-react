import React from "react";
import s from './Header.module.css';

const Header = () =>{
    return (
    <header className = {s.header1}>
      <div className = {s.fon}>
        <div>
          <img src="https://2.downloader.disk.yandex.by/preview/b2c9f2d29ab60846f242d3c4ae8524cb9e5a9737d892f4d75dd6b5ce8438d804/inf/fKqInKw3d7bLFOeFnMGnhOl2DdcA_K3EzuqJNEnI2wQXNk44HvmGz7eYntPIPuIaOoWHKIdqF3tYx2wvB5WlMSgSEAUwUDZT9ZzyCTSsZ0yr8npumZHI4midPdWhecNq?uid=1130000020082601&filename=logo.psd&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000020082601&tknv=v2&size=1349x657"/>
        </div>
        <div className = {s.month}>
          <span>Current month</span>
        </div>
        <div className = {s.employee}>
          <span>Employee</span>
        </div>
        <div className = {s.find}>
          <input type="search" name="q" placeholder="Поиск по сайту"/> 
          <input type="submit" value="Найти"/>
        </div>

      </div>
    

  </header>
    )
}
    export default Header;