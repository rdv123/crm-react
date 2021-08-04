import React from "react"
import s from './Projekt1.module.css';

const Projekt1 = (probs) =>{
  console.log('probs',probs)
    return (
    <div>
   
      <div className = {s.item}>
       <div className ={s.itemImg}>
          <img src = "https://novosel.by/upload/resize_cache/0fb/950_950/natjazhnoj-potolok-parjashchij-pongs-v-assortimente-950x950.jpg"/>
       </div> 
       <div className = {s.itemInfo}>
          
            <div className = {s.itemInfoAddress}>
              Адрес: {probs.address}
            </div>
            <div className = {s.itemInfoContacts}>
              Контакт: {probs.contacts} {probs.name} 
            </div>
            <div className = {s.itemInfoObjectDescription}>
              Описание: {probs.objectDescription}
            </div>
            <div className = {s.itemInfoComments}>
              Комментарий: {probs.comments}
            </div>
            <div>
            <button>
              <span>Подробнее</span>
            </button>
          
          </div>
       </div>
       
        
      </div>
     
     
    </div>
  )

}
    export default Projekt1;