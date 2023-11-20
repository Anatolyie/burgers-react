import { useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import './Search.css'


function Search() {
 const [value, setValue] = useState('')
 const { setSearchValue } = useContext(SearchContext);
 const inputRef = useRef()

 const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus()
 }

const updatetSearchValue = useCallback(
    debounce((str) => {
        setSearchValue(str);
    }, 500),
    [],
);

const onChangeInput = (event) => {
    setValue(event.target.value);
    updatetSearchValue(event.target.value)
}
    return (
        <div className='search'> 
            <BiSearch className='search-icon'/>
            <input 
                ref={inputRef}
                value={value}
                placeholder='Search burgers...' 
                className='search-input' 
                onChange={onChangeInput}
                />
            {
                value && (
                    <AiOutlineClose className='search-close' onClick={onClickClear}/>
                )
            }
        </div>
    );
}

export default Search;