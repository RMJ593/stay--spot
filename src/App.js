import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './pages/Add';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/main'element={<Main/>}/>
    <Route path='/add'element={<Add/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
