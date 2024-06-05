import {BrowserRouter , Routes, Route , } from 'react-router-dom'
import './App.css';
import Sign from './component/sign';
import Login from './component/login';
import Home from './component/home';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Sign/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/home'  element={<Home/>}></Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
