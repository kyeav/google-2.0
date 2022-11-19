import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  const search = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const term = searchInputRef?.current?.value;

    if (!term) return;

    // query param
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <Squares2X2Icon
            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            title="Google apps"
          />
          {/* avatar */}
          <Avatar className="" url="https://avatars.githubusercontent.com/u/106858714?v=4" />
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-33 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt=""
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon
            className="h-5 cursor-pointer"
            title="Search by voice"
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
