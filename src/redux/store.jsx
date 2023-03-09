import { configureStore } from '@reduxjs/toolkit'
import pagination from './slices/PaginationSlice'
import news from './slices/NewsSlice'


export const store = configureStore({
  reducer: {
    pagination,
    news,
  },
})
