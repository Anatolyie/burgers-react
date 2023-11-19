import Search from "../Search/Search";
import { Link  } from "react-router-dom";
import { useSelector } from "react-redux";

import './Header.css'

import  logo  from '../../assets/img/logo.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'


function Header() {
    const {items, totalPrice} = useSelector(state => state.cart);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0) 

    return (
        <div className='header'>
            <Link to='/' >  
                <div className='header-left'>
                    <div className='header-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-left-descr">
                        <h1 className='header-left-title'>Burgers</h1>
                        <div className='header-left-subtitle'>The best burgers in the world</div>
                    </div>
                </div>
            </Link>
            <Search/>
            <div className='header-right'>
            <Link to='/cart' className='header-right__btn'>
                <span>{totalPrice} $</span>
                <div className="header-right__delimiter"></div>
                <AiOutlineShoppingCart/>
                <span className='header-right__relative'>{totalCount}</span>
            </Link>
        </div>
        </div>
    );
}

export default Header;