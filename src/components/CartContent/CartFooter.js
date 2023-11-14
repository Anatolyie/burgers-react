import { Link } from 'react-router-dom';

function CartFooter() {
    return (
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
    );
}

export default CartFooter;