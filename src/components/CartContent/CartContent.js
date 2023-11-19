import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { minusItem, removeItem } from '../../redux/slices/cartSlice';

import './CartContent.css';
import { addItem } from '../../redux/slices/cartSlice';

function CartContent({ id, title, imageUrl, price, size, count, type }) {
    const dispatch = useDispatch();
    // const items = useSelector(state => state.cart.items);

    const onClickplus = () => {
        dispatch(
            addItem({
                id,
            })
        );
    };

    const onClickMinus = () => {
        dispatch(minusItem(id))
    };

    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove product')) {
            dispatch(removeItem(id))
        }
    };

    return (
        <div className='cart-content'>
            <ul className='cart-content__container'>
                <li>
                   <div className="cart-content__list"> 
                   <div className="cart-content__list-left">
                        <div className="cart-content__list-img">
                            <img src={imageUrl} alt="burger" />
                        </div>
                       <div className='cart-content__list-descr'>
                            <h4 className='cart-content__list-title'>{title}</h4>
                            <p className='cart-content__list-subtitle'>{type} <span className="cart-content__list-subtitle"> {size}</span></p>
                       </div>
                    </div>
                   </div>
                   <div className="cart-content__list">
                        <div className="cart-content__list-count"><span className='cart-content__list-circle' onClick={onClickMinus}>-</span> {count} <span className='cart-content__list-circle' onClick={onClickplus}>+</span></div>
                    </div>
                    <div className="cart-content__list">
                        <div className="cart-content__list-price">{price * count} $</div>
                    </div>
                    <div className="cart-content__list">
                        <div className="cart-content__list-delete" onClick={onClickRemove}>
                            <AiOutlineCloseCircle/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CartContent;