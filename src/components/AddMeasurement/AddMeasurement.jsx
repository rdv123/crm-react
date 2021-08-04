import React from 'react';
import s from "./AddMeasurement.module.css"
import {addProjektActionCreator, updateNewProjektTextActionCreator, updateAddressActionCreator, updateDesActionCreator, updateNameActionCreator, updateTelActionCreator} from "../../react2/profile-reducer";

let newInfoElement = React.createRef();
let inputTel = React.createRef();
let inputAddress = React.createRef();
let inputDes = React.createRef();
let inputName = React.createRef();


const AddMeasurement = (props) => {
    console.log(props,'props!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    let onAddProjekt = () => {
        // props.addProjekt ();
        //props.dispatch(addProjektActionCreator());
        
    }
    let onProjektChange = () => {
        let text = newInfoElement.current.value
        props.updateNewProjektText(text)
        //props.dispatch(action)
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
        <div className = {s.item}>
            Add Measurement
            <div>
                <form enctype="multipart/form-data" method="post">
                    <p>
                        Загрузите фотографии объекта
                    </p>
                    <p>
                        <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>
                        <input type="submit" value="Загрузить"/>
                    </p>
                </form>
            </div>
            <div>
                <p> 
                     Address  
                </p>
                <div>
                    <input onChange = {onAddressChange}
                            ref = {inputAddress}
                            value = {props.address}
                    /><span>Address</span>
                </div>
            </div>
             <div>
                <p>
                    Contakts
                </p>
                <p>
                    <input onChange ={onTelChange} 
                            ref = {inputTel} 
                             value ={props.tel}/><span>Tel.</span>
                </p>
                 <p>
                    <input onChange ={onNameChange} 
                    ref = {inputName} 
                     value ={props.name}/><span>number</span>
                </p>
                {/*<div>
                    <button onClick ={addProjekt}>Add info</button>
                </div>  */}
             </div>
             <div>
                 <p>
                     Description
                 </p>
                 <input onChange={onDesChange}
                    ref = {inputDes}
                    value = {props.objectDescription} />
                 <span>
                     Описание: перм., площ. и др.
                    </span>
             </div>
            <div>
                <p>
                    Comments
                </p>
                <textarea onChange ={onProjektChange} 
                            ref = {newInfoElement} 
                             value ={props.newProjektText}
                             />
            </div>
            <div>
                <button onClick ={onAddProjekt}>Add info</button>
            </div>
        </div>
    )
}
export default AddMeasurement;