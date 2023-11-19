import { AiOutlineCloseCircle } from 'react-icons/ai';


import './CartContent.css';

function CartContent({ id, title, imageUrl, price, sizes, count, type, size }) {


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
                            <p className='cart-content__list-subtitle'> {sizes}<span className="cart-content__list-subtitle">{type} 26gr</span></p>
                       </div>
                    </div>
                   </div>
                   <div className="cart-content__list">
                        <div className="cart-content__list-count"><span className='cart-content__list-circle'>-</span> {count} <span className='cart-content__list-circle'>+</span></div>
                    </div>
                    <div className="cart-content__list">
                        <div className="cart-content__list-price">{price * count} $</div>
                    </div>
                    <div className="cart-content__list">
                        <div className="cart-content__list-delete">
                            <AiOutlineCloseCircle/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CartContent;