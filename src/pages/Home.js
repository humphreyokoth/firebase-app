import React, { useState } from 'react'

const Home = () => {
    const [inputs,setInputs]  = useState({});
    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prev=>({...prev,[name]:value}))
    }
    
  return (
    <form>Home</form>
  )
}

export default Home