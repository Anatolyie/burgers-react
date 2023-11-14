import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import { useSelector, useDuspatch } from 'react-redux';
import axios from 'axios';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Error from './pages/Error';

import Header from './components/Header/Header';

import './scss/app.scss'

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
     </SearchContext.Provider>
    </div>
  );
}

export default App;
