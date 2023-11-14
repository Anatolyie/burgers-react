import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: 'Popularity',
        sortProperty: 'rating'
    },
};

const filterSLice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        }
    },
});

export const { setCategoryId, setSort } = filterSLice.actions

export default filterSLice.reducer
