import { computeHeadingLevel } from "@testing-library/react"
import projektReducer from "./profile-reducer";

let store = {
    _state: {
        projektData : {
            posts: [
                {address: "Белуша,  56", 
                contacts: "555555", //{name1: "Вася", tel: "37555555"}, 
                objectDescription: "Площадь: 100 м.кв. Периметр: 120 м.п. и др."
            },
                {address: "eryyuil 56", contacts: "Ва5", objectDescription: "Площадь: 100 м.кв. Периметр: 120 м.п. и др."},
            ],
            newProjektText: 'ddd',
            tel: "4444444444",
            name: "RRRRR",
            address:"sssss",
            objectDescription: 'Площадь/периметр и др.'
        }
    
        
    },
    _callSubscriber() {
        console.log('ddddddddddddddddddddddddd')
    },

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer - паттерн
    },

    dispatch (action) {

        this._state.projektData = projektReducer(this._state.projektData, action);
        this._callSubscriber(this._state);
    }
}

//         if(action.type === ADD_PROJEKT){
//             let newProjekt = {
//                 address: this._state.projektData.address,
//                 contacts:this._state.projektData.tel, 
//                 name: this._state.projektData.name, //state.projektData.posts.contacts.name1,
//                 objectDescription:this._state.projektData.objectDescription,
//                 comments: this._state.projektData.newProjektText
//             }
//             this._state.projektData.posts.push(newProjekt);
//             this._state.projektData.newProjektText = '';
//             this._state.projektData.tel = '';
//             this._state.projektData.name = '';
//             this._state.projektData.address = '';
//             this._state.projektData.objectDescription = '';
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_NEW_PROJEKT_TEXT){
//             this._state.projektData.newProjektText = action.newText;
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_TEL){
//             this._state.projektData.tel = action.newTel;
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_DES){
//             this._state.projektData.objectDescription = action.newDes
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_NAME){
//             this._state.projektData.name = action.newName;
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_ADDRESS){
//             this._state.projektData.address = action.newAddress;
//             this._callSubscriber(this._state);
//         }

//     }
// }
// export const addProjektActionCreator = () => {
//     return {
//         type: ADD_PROJEKT,
//     }
// }
// export const updateNewProjektTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_PROJEKT_TEXT,
//         newText: text
//     }
// }
// export const updateTelActionCreator = (tel) => {
//     return {
//        type: UPDATE_TEL,
//        newTel: tel
//     }
// }
// export const updateNameActionCreator = (name) => {
//    return{
//        type: UPDATE_NAME, 
//        newName: name
//    }
// }
// export const updateAddressActionCreator = (address) => {
//    return{
//        type: UPDATE_ADDRESS, 
//        newAddress: address
//    }
// }
// export const updateDesActionCreator = (objectDescription) => {
//    return{
//        type:UPDATE_DES, 
//        newDes: objectDescription
//    }
// }

 
export default store;
window.state = store;