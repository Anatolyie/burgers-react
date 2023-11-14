import CartFooter from './CartFooter';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { PiTrashThin } from 'react-icons/pi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import burgersImg from '../../assets/img/burgers1.jpeg';

import './CartContent.css';

function CartContent() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    return (
        <div className='cart-content'>
            <div className="cart-content__wrapper">
                <div className="cart-content-left cart-content-flex">
                    <AiOutlineShoppingCart/>
                    <span>Cart</span>
                </div>
                <div className="cart-content-right cart-content-flex">
                    <PiTrashThin/>
                    <span>Empty trash</span>
                </div>
            </div>
            <div className='cart-content__container'>
                <div>
                   <div className="cart-content__list">
                   <div className="cart-content__list-left">
                        <div className="cart-content__list-img">
                            <img src={burgersImg} alt="burger" />
                        </div>
                       <div className='cart-content__list-descr'>
                            <h4 className='cart-content__list-title'>Aristocrat Burger</h4>
                            <p className='cart-content__list-subtitle'> Traditional bread <span className="cart-content__list-subtitle">26gr</span></p>
                       </div>
                    </div>
                   </div>
                   <div className="cart-content__list">
                        <div className="cart-content__list-count"><span className='cart-content__list-circle'>-</span> 2 <span className='cart-content__list-circle'>+</span></div>
                    </div>
                    <div className="cart-content__list">
                        <div className="cart-content__list-price">3 $</div>
                    </div>
                    <div className="cart-content__list">
                        <div className="cart-content__list-delete">
                            <AiOutlineCloseCircle/>
                        </div>
                    </div>
                </div>
            </div>
            <CartFooter/>
        </div>
    );
}

export default CartContent;