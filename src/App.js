import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Filter1 from './components/Filter1/Filter1';
import AddMeasurement from './components/AddMeasurement/AddMeasurement';
import Designers from './components/Designers/Designers';
import ReMeasurement from './components/ReMeasurement/ReMeasurement';
import Masters from './components/Masters/Masters';
import Archive from './components/Archive/Archive';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { addProjekt } from './react2/store';

const App =(props) => {
  
  return (
    
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className = "app-wrapper-content">
         <Route path = "/profile" 
                render = {() => <Profile 
                  dispatch={props.dispatch}
                
                  projektData = {props.appState.projektData}/>}/>
         <Route path = "/addMeasurement" 
                render = {() => <AddMeasurement
                  projektData = {props.appState.projektData}
                  newProjektText = { props.appState.projektData.newProjektText} 
                  dispatch = {props.dispatch}
                 
                 
                  tel = {props.appState.projektData.tel}
                  objectDescription = {props.appState.projektData.objectDescription}
                
                  address={props.appState.projektData.address}
                 
                  name = {props.appState.projektData.name}
                  />}/>
         <Route path = "/reMeasurement" render = {() => <ReMeasurement/>}/>
         <Route path = "/designers" render = {() => <Designers/>}/>
         <Route path = "/masters" render = {() => <Masters/>}/>
         <Route path = "/archive" render = {() => <Archive/>}/>
        
        </div>


        <Filter1/>
      
      
      </div>
  
  );
}

export default App;
