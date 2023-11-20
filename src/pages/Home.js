import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import axios from "axios";

import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Burgers from "../components/Burgers/Burgers";
import Skeleton from "../components/Burgers/Skeleton";

import '../scss/app.scss'
import { SearchContext } from "../App";

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filter.categoryId);
  const sortType = useSelector(state => state.filter.sort.sortProperty);

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

    useEffect(() => {
      setIsLoading(true)

      axios.get(`https://654e2e2bcbc3253557427c8e.mockapi.io/products/articles?
      ${categoryId > 0 ? `category=${categoryId}` : ''      
      }&sortBy=${sortType}`).then(res => {
        setItems(res.data);
          setIsLoading(false)
      })

    

        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
      <>
        <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
            <Sort/>
          </div>
          <h2 className="content__title">All Burgers</h2>
          <div className="content__items">
            {
              isLoading ? skeletons
              :
              items.filter(obj => {
                if ((obj.title).toLowerCase().includes(searchValue.toLowerCase())) {
                  return true
                }
              })
              .map((obj) => (
                <Burgers 
                  key={obj.id}
                  {...obj}

                  />
              ))
            }
          </div>
        </div>
      </div>
      </>
    );
}

export default Home;

