import React, { useState } from 'react'
import { postData } from '../Services/functionServices';
const Home = () => {
    const [inputs,setInputs]  = useState({});
    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prev=>({...prev,[name]:value}))
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(inputs)
      postData(inputs)
    }
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column bd-highlight mb-3 container mt-5">
    <label>Title:
      <input
        type="text"
        name="todo"
        value={inputs.todo || ""}
        onChange = {handleChange}
      />
    </label>
    <label>Description:
      <input
        type="text"
        name="todo"
        value={inputs.todo || ""}
        onChange = {handleChange}
      />
    </label>
    <label>Author:
      <input
        type="text"
        name="todo"
        value={inputs.todo || ""}
        onChange = {handleChange}
      />
    </label>
<input type="submit"/>
    </form>
  )
}

export default Home