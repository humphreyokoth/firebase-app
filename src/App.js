
import Home from './pages/Home';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="row" style={{height:"1000px"}}>
      
      <div className='col-8'>
        <BrowserRouter>
          <Routes>
            <Route index element ={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
