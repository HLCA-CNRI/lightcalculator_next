import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LightCalculator from "../components/LightCalculator";
import UserInfo from "../components/UserInfo";
import { memo, useState } from "react";

const Home: NextPage = () => {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Head>
        <title>Light Calculator | CNRIKOREA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticate == false ? <UserInfo setAuthenticate={setAuthenticate}></UserInfo> : <LightCalculator />}

      {/* <UserCard/> */}
    </div>
  );
};

export default memo(Home);
