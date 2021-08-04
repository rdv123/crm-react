import React from 'react';
import s from "./AddMeasurement.module.css"
import {addProjektActionCreator, updateNewProjektTextActionCreator, updateAddressActionCreator, updateDesActionCreator, updateNameActionCreator, updateTelActionCreator} from "../../react2/profile-reducer";
import AddMeasurement from './AddMeasurement';

let newInfoElement = React.createRef();
let inputTel = React.createRef();
let inputAddress = React.createRef();
let inputDes = React.createRef();
let inputName = React.createRef();


const AddMeasurementContainer = (props) => {
    console.log(props,'props')
    let addProjekt = () => {
                                            
        props.store.dispatch(addProjektActionCreator());
        
    }
    let onProjektChange = (text) => {
        
        let action = updateNewProjektTextActionCreator(text)
        props.store.dispatch(action)
    }

    let onTelChange=()=>{
        
        let tel = inputTel.current.value
        let action = updateTelActionCreator(tel)
        props.dispatch(action)
    }
    let onNameChange = () => {
        let name = inputName.current.value
        let action = updateNameActionCreator(name)
        props.dispatch(action)
    }
    let onAddressChange = () =>  {
        let address = inputAddress.current.value
        let action = updateAddressActionCreator(address)
        props.dispatch(action)
    }
    let onDesChange = () => {
        let objectDescription = inputDes.current.value;
        let action = updateDesActionCreator (objectDescription)
        props.dispatch(action);
    };
    return (
        <AddMeasurement 
        updateNewProjektText = {onProjektChange} 
        addProjekt = {addProjekt}
        projektData = {props.projektData}
        />
    )
}
export default AddMeasurementContainer;