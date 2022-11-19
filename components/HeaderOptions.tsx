import HeaderOption from "./HeaderOption";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  PhotoIcon,
  TagIcon,
  EllipsisVerticalIcon,
  PlayCircleIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left */}
      <div className="flex space-x-6">
        {/* icon is capitalised as we're passing a component to it */}
        <HeaderOption Icon={MagnifyingGlassIcon} title="All" selected />
        <HeaderOption Icon={PlayCircleIcon} title="Videos" />
        <HeaderOption Icon={PhotoIcon} title="Images" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={TagIcon} title="Shopping" />
        <HeaderOption Icon={EllipsisVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
