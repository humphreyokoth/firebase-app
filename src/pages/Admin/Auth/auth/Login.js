import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider()
  const [formData, setFormData] = useState({
    email: "",  
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
     signInWithPopup(auth, googleProvider)
    .then((response) =>{
        console.log(response.user)
        // const signin = response.user
        // alert(`${signin.displayName} has signed in`)
    })
    .catch((err) => {
        alert(err.message)
    });
}
  // useEffect(() => {
  //   if (auth) {
    
  //     navigate("/");
  //   }
    
  // }, [ navigate, auth]);
  

  return (
    <div className="login">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        
        <br/>
          <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <br/>
        <button type="submit">Login</button>
    
        </form>
    </div>
  );
};

export default Login;
