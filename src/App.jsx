import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarBS from './components/NavBarBS'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBarBS/>
      <Routes>
        <Route path='/' element= {<ItemListContainer mensaje = 'Bienvenidos a Cerezos Pizza'/>}/>
        <Route path='/category/:category' element= {<ItemListContainer mensaje = 'Productos disponibles'/>}/>      
        <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
