import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  XMarkIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const term = searchInputRef?.current?.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        {/* next image is lazy loaded by default */}
        <Image
          className="cursor-pointer"
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt=""
          onClick={() => router.push("/")}
        />

        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow">
          <input
            defaultValue={router.query.term}
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XMarkIcon
            title="Clear"
            onClick={() => (searchInputRef!.current!.value = "")}
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon
            title="Search by voice"
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"
          />
          <MagnifyingGlassIcon
            title="Search"
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          className="ml-auto"
          url="https://avatars.githubusercontent.com/u/106858714?v=4"
        />
      </div>

      {/* header options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
