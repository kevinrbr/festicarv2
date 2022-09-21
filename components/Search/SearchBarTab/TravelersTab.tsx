import { UserPlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { AddTravelers } from "../SearchDetails/AddTravelers";

export const TravelersTab = () => {
  const [travelers, setTravelers] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleClickOutside = () => {
    setIsActive(false);
  };
  const ref = useOutsideClick(handleClickOutside, isActive);
  return (
    <div className="relative" ref={ref}>
      <button
        className="mt-6 md:mt-0 flex items-center text-left"
        onClick={() => setIsActive(true)}
      >
        <UserPlusIcon className="h-6 w-6" />
        <span className="ml-1 text-lg">{travelers}</span>
      </button>
      <AddTravelers
        travelers={travelers}
        setTravelers={setTravelers}
        isActive={isActive}
      />
    </div>
  );
};
