import React from 'react'
import { NewsItem } from '../NewsItem/NewsItem'

import styles from './NewsList.module.css'

const NewsList = ({ currentPageNews, title }) => {

  if (!currentPageNews.length) {
    return (
      <h2 className={styles.title}> Новости не найдены! 😞
      </h2>
    )
  }

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.newsItem_grid}>
        {currentPageNews.map((newsItem) => (
          <NewsItem key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    </div>
  )
}
export default NewsList;