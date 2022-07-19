import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User.js";
import SearchHeaderOptions from "./SearchHeaderOptions.js";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`search?term=${term.trim()}&searchType=`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          objectFit="contain"
          alt="google logo"
          height={40}
          width={120}
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-poiner sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button onClick={search} type="submit" hidden />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
