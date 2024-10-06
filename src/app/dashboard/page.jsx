'use client'
import { useEffect, useState } from 'react'
import style from'./page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

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


const session = useSession();
const router = useRouter()

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const { data, error, loading } = useSWR(
  `/api/posts?username=${session.data.user.name}`,
  fetcher
)
console.log(
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data);
console.log(session);
if (session.status === 'loading'){
  return <p>Loading</p>
}
if (session.status === 'unauthenticated'){
  router?.push('/dashboard/login');
}

  if (session.status === 'authenticated') {
  return (

    <div className={style.container}>Dashboard</div>
  )
}
}

export default Dashboard


