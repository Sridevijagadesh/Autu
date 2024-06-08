import {BrowserRouter , Routes, Route , } from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar'
import Login from './component/login';
import Home from './component/home';
import Register from './component/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
  
 <BrowserRouter>
 <Navbar/>
 <ToastContainer/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register'  element={<Register/>}></Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
