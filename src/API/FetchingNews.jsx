import axios from 'axios'


export async function fetchAllNews() {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  return response.data
}

export async function fetchItemNews(id) {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  return response.data
}


