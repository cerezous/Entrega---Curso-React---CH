import 'bootstrap/dist/css/bootstrap.min.css'
import 'sileo/styles.css'
import './App.css'
import NavBarBS from './components/NavBarBS'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { Toaster } from 'sileo'

function App() {
  return (
    <CartProvider>
    <Toaster
      position="top-right"
      theme="light"
      options={{ fill: '#000000' }}
    />
    <BrowserRouter>
      <NavBarBS/>
      <Routes>
        <Route path='/' element= {<ItemListContainer mensaje = 'Bienvenidos a Cerezos Pizza'/>}/>
        <Route path='/category/:category' element= {<ItemListContainer mensaje = 'Productos disponibles'/>}/>      
        <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>       
        <Route path='*' element={<Error/>}/>
      </Routes>   
    </BrowserRouter>
    </CartProvider>

  )
}

export default App
