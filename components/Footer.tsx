import React from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-green-100 py-4 -mt-16">
      <div className="max-w-2xl container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto text-center md:text-left">
          <span className="text-gray-700 font-bold text-lg tracking-wide opacity-50">
            My Shopping List
          </span>
        </div>
        <div className="w-full md:w-auto text-center md:text-right mt-4 md:mt-0 opacity-70">
          <a
            href="https://kreativeusa.com/"
            className="text-gray-600 hover:text-gray-800 text-sm mr-4"
          >
            Discover Kreative
          </a>
          <a
            href="https://guppy57.com/"
            className="text-gray-600 hover:text-gray-800 text-sm mr-4"
          >
            Meet Guppy
          </a>
          <a
            href="https://github.com/guppy57/shopping-list.git"
            className="text-gray-600 hover:text-gray-800 text-sm mr-4"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
