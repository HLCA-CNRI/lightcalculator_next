import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LightCalculator from '../components/LightCalculator'
import UserInfo from '../components/UserInfo'
import { useState } from 'react'

const Home: NextPage = () => {
  const [authenticate,setAuthenticate] = useState(false)

  // useEffect(()=>{
  //   console.log("authenticate",authenticate)
  // },[authenticate])

  return (
    <div >
      <Head>
        <title>Light_Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <UserCard/> */}

      {authenticate==false ?  <UserInfo setAuthenticate = {setAuthenticate}></UserInfo> : <LightCalculator/>}
        
    </div>
  )
}

export default Home
