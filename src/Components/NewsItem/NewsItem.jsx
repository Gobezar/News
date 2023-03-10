import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { getFormatedUnixDate } from '../../helpers/data';

import styles from "./NewsItem.module.css"

export const NewsItem = ({ newsItem }) => {
  const navigate = useNavigate()
  const date = getFormatedUnixDate(newsItem.time)


  return (
    <>
      <div className={styles.newsItem}>
        <ul>
          <li className={styles.itemTitle}>"{newsItem.title}"</li>
          <li className={styles.itemElement}>Имя автора: {newsItem.by}</li>
          <li className={styles.itemElement}>Рейтинг: {newsItem.score}</li>
          <li className={styles.itemElement}>Дата публикации: <br /> {date.toString()}</li>
          <Button className={styles.itemButton} type="primary" onClick={() => navigate(`/news/${newsItem.id}`)}>Подробнее...</Button>
        </ul>
      </div>
    </>
  )
}
