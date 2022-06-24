import { memo, useState } from "react";
import Head from "next/head";

import LightCalculator from "../components/LightCalculator";
import UserInfo from "../components/UserInfo";

function Home() {
  const [authenticate, setAuthenticate] = useState(false);

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

      {/* <UserCard/> */}
    </div>
  );
}

export default memo(Home);
