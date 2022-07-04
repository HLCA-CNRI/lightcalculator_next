import {memo, useState} from "react";
import Head from "next/head";

import LightCalculator from "../components/LightCalculator";
import UserInfo from "../components/UserInfo";

function Home() {
  // 자금은 사용자 정보 안가져오기로해서 꺼놓음. 원레 사용자 정보 가져오는 부분있어서 authenticate 됬으면 LC보여주고 authenticate 되지않았으면 사용자 정보 보여줌.
  const [authenticate, setAuthenticate] = useState(true);

  return (
    <div>
      <Head>
        <title>Light Calculator | CNRIKOREA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticate === false ? (
        <UserInfo setAuthenticate={setAuthenticate} />
      ) : (
        <LightCalculator />
      )}
    </div>
  );
}

export default memo(Home);
