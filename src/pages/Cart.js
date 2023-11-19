import CartContent from "../components/CartContent/CartContent";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { AiOutlineShoppingCart } from 'react-icons/ai';
import { PiTrashThin } from 'react-icons/pi';
 
function Cart() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    return (
        <div className="cart-content">
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
            {
                items.map(item => {
                    <CartContent key={item.id} {...item}/>
                    console.log(item)
                })
            }

           <div className='cart-footer'>
            <Link to="/" className="cart-footer__left">
                <p>Total of burgers: <span>3</span></p>
                <button>Back</button>
            </Link>
            <Link to="/" className="cart-footer__right">
                <p>Order amount: <span>3 $</span></p>
                <button>Pay Now</button>
            </Link>

        </div>
        </div>
    );
}

export default Cart;