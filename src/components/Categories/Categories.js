import { useState } from 'react';
import './Categories.css'

import '../../scss/app.scss'

function Categories({ value, onChangeCategory }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
        'All', 'Vegetarians', 'Spicy', 'Chicken', 'Pig', 'Beef'
    ]

    return (
        <div className='categories'>
            <ul>
                {categories.map((categoryName, i) => (
                    <li 
                        key={i} 
                        onClick={() => onChangeCategory(i)} 
                        className={value === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Categories;


