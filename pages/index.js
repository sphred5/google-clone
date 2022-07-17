import Head from "next/head";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?${term.trim()}`);
  }
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Clone of google project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          objectFit="cover"
          alt="google logo"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
            type="text"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I&apos;m feeling lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
