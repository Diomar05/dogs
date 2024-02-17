import { NavLink } from 'react-router-dom';
import Nav from './Navbar.module.css'
import  Search  from '../Search/Search'

const Navbar = () => {
    return (
        <div className={Nav.box}>

            <div className={Nav.containerMenu}>
                <NavLink to="/home"><button>Home</button></NavLink>
                <NavLink to="/create"><button>Create</button></NavLink>
            </div>

           <div className={Nav.containerSearch}>
                <Search/>
           </div>
        </div>
    )
}

export default Navbar;