import React from 'react'
import styles from './Comments.module.css'

const CommentsList = ({ userName, commentText, date }) => {

  return (
    <div className={styles.commentItemList}>

      <p className={styles.commentItem}>Никнейм: <span className={styles.commentItemUser}>{userName}</span></p>
      <p className={styles.commentItem}><span className={styles.commentItemText}>"{commentText}"</span></p>
      <p className={styles.commentItem}>Дата: <span>{date} </span></p>

    </div>
  )
}

export default CommentsList;