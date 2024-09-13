import React from 'react'
import styles from'./page.module.css'
const Category = ({params}) => {
  console.log(params.category) // { category: 'web-development' }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {(params.category.toUpperCase(1))}
        </h1>
      <div className={styles.item}>
        <div className={styles.content}>

        </div>
        </div>
       
  
    </div>
  )
}

export default Category