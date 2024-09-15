import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
const Category = ({ params }) => {
  console.log(params.category); // { category: 'web-development' }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category.toUpperCase(1)}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.heading}>text</h1>
          <p className={styles.Desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src="/2Developeractivity.gif"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.heading}>text</h1>
          <p className={styles.Desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src="/illustration2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
