import logo from './logo.svg';
import './App.css';

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
