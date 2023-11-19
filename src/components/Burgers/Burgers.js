import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

import { useState } from 'react';
import { BiPlus } from 'react-icons/bi'

import './Burgers.css'

const typeName = ['Traditional bread', 'Bread with seeds'];


function Burgers( {id, title, price, imageUrl, sizes, types}) {
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items.find(obj => obj.id === id));

    const addedCount = cartItems ? cartItems.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            type: typeName[activeType],
            size: sizes[activeSize],
            count: 1
        };  
        dispatch(addItem(item));
    }

    return (
        <div className="burgers-block">
            <div className='burgers-img'>
                <img src={require(`../../assets/${imageUrl}`)} alt="burgers" />
            </div>
            <h4 className="burgers-block__title">{title}</h4>
            <div className="burgers-block__selector">
                <ul className='burgers-block__selector-li'>
                    {
                        types.map((type, i) => <li key={i} onClick={() => setActiveType(i)} className={activeType === i ? 'active' : ''}> {typeName[type]}</li>)
                          
                    }
                </ul>
                <ul className='burgers-block__selector-li'>
                    {
                        sizes.map((size, i) => <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size}gr.</li>)
                    }
                      
                </ul>
            </div> 
            <div className="burgers-block__bottom">
                <div className="burgers-block__price">from {price} $</div>
                <button className="burgers-block-button" onClick={onClickAdd}>
                    <BiPlus/>
                    <span>Add</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    );
}

export default Burgers;