import React from 'react'
import "../App.css"
import {MdClose} from "react-icons/md";

const Formtable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleClose}><MdClose/></div>  
              <label htmlFor="name">Vardas ir Pavardė : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>

              <label htmlFor="email">Elektroninis paštas : </label>
              <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email}/>

              <label htmlFor="age">Amžius : </label>
              <input type="number" id="age" name="age" onChange={handleOnChange} value={rest.age}/>

              <button className="btn">Pateikti duomenis</button>
            </form>
    </div>
  )
}

export default Formtable