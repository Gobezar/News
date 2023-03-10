import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pages: [],
    currentPage: 1,
    pageSize: 6,
    totalCountNews: 100,
}


const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
            window.scrollTo(0, 0)
        },
        setPageSize(state, action) {
            state.pageSize = action.payload
        }
    }
})

export const { setCurrentPage, setPageSize } = paginationSlice.actions;
export default paginationSlice.reducer