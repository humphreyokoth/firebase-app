import React, {useState} from 'react';
import { postData } from '../Services/functionServices';

const Product = () => {

  const [input, setInput] = useState("");

    
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(prev => ({...prev, [name]: value}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    postData(input)
    alert(`product: ${input.product} created`)
    

    
  }
    return (
        <div className="product">
          <form onSubmit={handleSubmit}>
        <label>
        <input 
         placeholder="product name"
          type="text"
          name="product"
          value={input.product||""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" onClick={handleSubmit}  /> 
      </form>
        </div>    

        
    )

  
      
}

export default Product;