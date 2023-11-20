import CartContent from "../components/CartContent/CartContent";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { claerItems } from "../redux/slices/cartSlice";


import { AiOutlineShoppingCart } from 'react-icons/ai';
import { PiTrashThin } from 'react-icons/pi';


function Cart() {
    const dispatch = useDispatch();
    const {totalPrice, items} = useSelector(state => state.cart);
    // const items = useSelector(state => state.cart.items);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0) 

    const onClickClear = () => {
        if (window.confirm('Are you sure you want to remove all products?')) {
            dispatch(claerItems())
        }
    };

    return (
        <div className="cart-content">
             <div className="cart-content__wrapper">
                <div className="cart-content-left cart-content-flex">
                    <AiOutlineShoppingCart/>
                    <span>Cart</span>
                </div>
                <div onClick={onClickClear} className="cart-content-right cart-content-flex">
                    <PiTrashThin/>
                    <span>Empty trash</span>
                </div>
            </div>

                { totalCount !== 0 ?
                    items.map((item, index) => (
                        <CartContent key={index} {...item}/>
                    ))
                    :
                    <div className="cart-empty">Shopping cart is empty, please add products</div>
                }


           <div className='cart-footer'>
            <Link to="/" className="cart-footer__left">
                <p>Total of burgers: <span>{totalCount}</span></p>
                <button>Back</button>
            </Link>
            <Link to="/" className="cart-footer__right">
                <p>Order amount: <span>{totalPrice} $</span></p>
                <button>Pay Now</button>
            </Link>

        </div>
        </div>
    );
}

export default Cart;