'use client'
import { useEffect, useState } from 'react'
import style from'./page.module.css'
import useSWR from 'swr'

const Dashboard = () => {
  const [isData,setIsData] = useState([]);
  const [err,setErr] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  // useEffect(() =>{
  //   const getdata = async() => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store"
  //     })

  //     if(!res.ok){
  //       setErr(true);
  //       setIsLoading(false);
  //       return;
  //     }
  //     const data = await res.json();
  //     setIsData(data);
  //     setIsLoading(false);

  //   };
    
  //   getdata()
  // }, []);



const fetcher = (...args) => fetch(...args).then((res) => res.json());
const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data);

  return (

    <div className={style.container}>Dashboard</div>
  )
}

export default Dashboard