import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllNews, fetchItemNews } from '../../API/FetchingNews'


export const fetchNewsList = createAsyncThunk('news/fetchNewsList', async () => {
  const all = await fetchAllNews()
  const result = await Promise.all(
    all.filter((el, index) => index < 100).map((el) => fetchItemNews(el))
  )
  result.sort((a, b) => b.time - a.time)
  return result
})

export const fetchComments = createAsyncThunk('news/fetchComments', async (idsComments) => {
  const result = await Promise.all(
    idsComments.map((el) => fetchItemNews(el))
  )
  return result
})



const initialState = {
  news: [],
  isLoading: false,
  statusNews: 'loading',
  statusComments: 'loading'
}


const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchNewsList.pending]: (state) => {
      state.statusNews = 'loading'
      state.news = []
    },
    [fetchNewsList.fulfilled]: (state, action) => {
      state.statusNews = 'success'
      state.news = action.payload;
    },
    [fetchNewsList.rejected]: (state) => {
      state.statusNews = 'error';
      state.news = []
    },


    [fetchComments.pending]: (state) => {
      state.statusComments = 'loading'

    },
    [fetchComments.fulfilled]: (state, action) => {
      state.statusComments = 'success'
      state.news = state.news.map((news) => {
        if (news.id !== action.payload[0].parent) return news
        return { ...news, comments: action.payload }
      })
    },
    [fetchComments.rejected]: (state) => {
      state.statusComments = 'error';

    },
  }
})

export const { } = NewsSlice.actions;
export default NewsSlice.reducer