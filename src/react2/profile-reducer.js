
const ADD_PROJEKT = 'ADD-PROJEKT';
const UPDATE_NEW_PROJEKT_TEXT = 'UPDATE-NEW-PROJEKT-TEXT'
const UPDATE_TEL = 'UPDATE-TEL'
const UPDATE_NAME = 'UPDATE-NAME' 
const UPDATE_ADDRESS = 'UPDATE-ADDRESS'
const UPDATE_DES = 'UPDATE-DES'

let initialState =  {
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

const projektReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROJEKT: 
            let newProjekt = {
                address: state.address,
                contacts:state.tel, 
                name: state.name, //state.projektData.posts.contacts.name1,
                objectDescription:state.objectDescription,
                comments: state.newProjektText
            }
            state.posts.push(newProjekt);
            state.newProjektText = '';
            state.tel = '';
            state.name = '';
            state.address = '';
            state.objectDescription = '';
            return state
        case UPDATE_NEW_PROJEKT_TEXT:
           state.newProjektText = action.newText;
           return state
        case UPDATE_TEL:
            state.tel = action.newTel;
            return state;
        case UPDATE_DES:
            state.objectDescription = action.newDes
            return state;
        case UPDATE_NAME:
            state.name = action.newName;
            return state;
        case UPDATE_ADDRESS:
            state.address = action.newAddress;
            return state;
        default:
            return state;
    }
}
export const addProjektActionCreator = () => {
            return {
                type: ADD_PROJEKT,
            }
        }
export const updateNewProjektTextActionCreator = (text) => {
            return {
                type: UPDATE_NEW_PROJEKT_TEXT,
                newText: text
            }
        }
export const updateTelActionCreator = (tel) => {
            return {
            type: UPDATE_TEL,
            newTel: tel
            }
        }
export const updateNameActionCreator = (name) => {
        return{
            type: UPDATE_NAME, 
            newName: name
        }
        }
export const updateAddressActionCreator = (address) => {
        return{
            type: UPDATE_ADDRESS, 
            newAddress: address
        }
        }
export const updateDesActionCreator = (objectDescription) => {
        return{
            type:UPDATE_DES, 
            newDes: objectDescription
        }
        } 
 
 export default projektReducer