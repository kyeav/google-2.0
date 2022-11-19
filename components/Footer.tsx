import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Singapore</p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
          <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <GlobeAsiaAustraliaIcon className="h-5 mr-1 text-green-700" />{" "}
            Carbon neutral since 2007
          </div>

          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <Link
              className="link"
              href="https://ads.google.com/intl/en_sg/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            >
              Advertising
            </Link>
            <Link
              className="link"
              href="https://www.google.com/intl/en_sg/business/"
            >
              Business
            </Link>
            <Link
              className="link"
              href="https://www.google.com/search/howsearchworks/?fg=1"
            >
              How Search works
            </Link>
          </div>

          <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
            <Link
              className="link"
              href="https://policies.google.com/privacy?hl=en-SG&fg=1"
            >
              Privacy
            </Link>
            <Link
              className="link"
              href="https://policies.google.com/terms?hl=en-SG&fg=1"
            >
              Terms
            </Link>
            <Link className="link" href="/">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
