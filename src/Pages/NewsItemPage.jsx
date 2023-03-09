import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import styles from '../Components/NewsItem/NewsItem.module.css'
import { getFormatedUnixDate } from '../helpers/data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from "../redux/slices/NewsSlice"
import CommentsList from '../Components/Comments/CommentsList';
import Loader from '../UI/Navbar/Loader/Loader';

const NewsItemPage = (props) => {


  const {news, statusComments} = useSelector((state) => state.news)
  const { id } = useParams()
  const dispatch = useDispatch();
  const filtered = news.filter((item) => item.id === +id)
  const date = getFormatedUnixDate(filtered[0].time)


  function getCommentsList(com) {
    dispatch(fetchComments(com))
  }

  useEffect(() => {
    getCommentsList(filtered[0].kids)
  }, [])





  return (
    <div className={styles.newsItemOnPage}>
      <h2 className={styles.itemTitleOnPage}>"{filtered[0].title}"</h2>
      <p className={styles.itemElementOnPage}>Ссылка на источник: <a href={filtered[0].url}>перейти</a></p>
      <p className={styles.itemElementOnPage}>Дата публикации: {date.toString()}</p>
      <p className={styles.itemElementOnPage}>Автор: {filtered[0].by}</p>
      <p className={styles.itemElementOnPage}>Количество комментариев: {filtered[0].kids ? (filtered[0].kids).length : 'отсутствуют'}</p>
      
      {statusComments === 'error' 
      ? ''
      : <div> {statusComments === 'loading' 
          ? <div className="Loader"> <Loader /> </div>
          : <div className={styles.itemElementOnPage}>Комментарии:
        {
          filtered[0].comments && filtered[0].comments.map((el) => 
          <CommentsList key={el.id} userName={el.by} commentText={el.text} date={getFormatedUnixDate(el.time)}/>)
        }
      </div>}
      </div>
      }
      

      <Button onClick={() => getCommentsList(filtered[0].kids)} className={styles.itemButtonOnPage} type="primary">Обновить комментарии</Button> <br />

      <Button className={styles.itemButtonOnPage} type="primary"> <Link to='/'>Назад</Link></Button>

    </div>
  )
}
export default NewsItemPage