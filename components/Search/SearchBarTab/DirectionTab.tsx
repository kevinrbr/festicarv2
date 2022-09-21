import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const DirectionTab = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mt-6 md:mt-0 flex items-center md:mr-10 lg:mr-14">
      <button className="text-left">
        <h3 className="text-lg md:font-bold md:text-base -mb-2">J'y vais</h3>
        <span className="hidden md:inline text-gray-500 text-sm">
          D'où je pars
        </span>
      </button>
      <button>
        <ArrowsRightLeftIcon className="mt-2 md:mt-0 mx-5 h-5" />
      </button>
      <button className="text-left">
        <h3 className="text-gray-400 font-light text-md md:text-black md:font-base md:font-bold md:text-sm -mb-2">
          Je rentre
        </h3>
        <span className="hidden md:inline text-gray-500 text-xs">
          Où je rentre
        </span>
      </button>
    </div>
  );
};
