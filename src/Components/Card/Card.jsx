import React from 'react'
import styles from './Card.module.css'


const Card = ({ title, category, description, price, star, count, img,func, actionBtn }) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.cat}>{category}</div>
      <div className={styles.inner}>
        <div className={styles.inner1}>
          <div className={styles.image}><img src={img} /></div>
          <div className={styles.titles}>{title}</div>
          <div className={styles.detail}>{description}</div>
        </div>
        <div className={styles.text}>
          {price ? (<><div className={styles.money}>${price}</div><div className={styles.likes}><i className="fa-solid fa-star"></i>{star} ({count})</div></>): ""}
          <button onClick={func} className={styles.view}>{actionBtn}</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card