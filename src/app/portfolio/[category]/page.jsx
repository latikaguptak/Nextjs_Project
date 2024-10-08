import React from "react";
import styles from "./page.module.css";
import Button from "../../../../components/button/button";
import Image from "next/image";
import {items } from './data.js';
import { notFound } from "next/navigation";
import Link from "next/link";

const getdata =(cat)=>{
  const isdata = items[cat];
  if (isdata){
    return isdata
  }
  return notFound();
}

const Category = ({ params }) => {
  const data = getdata(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Websites</h1>

      {data.map((item)=> (

        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <Link href={item.link}>
          <h1 className={styles.heading}>{item.title}</h1>
          </Link>
          <p className={styles.Desc}>{item.desc}</p>
          
          <Button text="See More" url={item.link} />
          
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src={item.image}
            alt=""
            />
        </div>
      </div>
      ))
      }
    </div>
  );
};

export default Category;
