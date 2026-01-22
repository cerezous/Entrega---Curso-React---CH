
import '../assets/css/NavBar.css'
import CardWidget from './CardWidget'
import logoCerezosPizza from '../assets/img/logo-cerezos-pizza.png'

const NavBar = () => {
    return(
        <nav className='nav-container'>
            <a className='anchor-nav' href="">
                <img src = {logoCerezosPizza} alt= 'logo-cerezos-pizza' className='logo'></img>
            </a>
            <a className='anchor-nav' href="">Pizzas</a>
            <a className='anchor-nav' href="">Bebidas</a>
            <a className='anchor-nav' href="">Promociones</a>
            <CardWidget/>
        </nav>
    )
}

export default NavBar 