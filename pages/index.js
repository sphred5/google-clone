import Head from "next/head";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Clone of google project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
