import {BrowserRouter , Routes, Route , } from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar'
import Login from './component/login';
import Home from './component/home';
import Register from './component/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';

export const UserContext = createContext(null)

function App() {
  const [user , setuser] = useState()
  return (
    <div className="App">
  <UserContext.Provider value={{user , setuser}}>


 <BrowserRouter>
 <Navbar/>
 <ToastContainer/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register'  element={<Register/>}></Route>
 </Routes>
 </BrowserRouter>
 </UserContext.Provider>
    </div>
  );
}

export default App;
