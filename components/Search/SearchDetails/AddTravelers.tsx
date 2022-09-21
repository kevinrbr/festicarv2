import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

type AddTravelersProps = {
  travelers: number;
  setTravelers: Dispatch<SetStateAction<number>>;
  isActive: boolean;
};

export const AddTravelers = ({
  travelers,
  setTravelers,
  isActive,
}: AddTravelersProps) => {
  return (
    <div
      className={`absolute flex items-center bottom-0 bg-white transition-transform duration-150 ease-in-out md:w-24 md:justify-center md:rounded md:-z-10 ${
        isActive
          ? "-translate-x-8 md:translate-y-11"
          : "translate-x-20 md:-translate-x-8"
      }`}
    >
      <MinusIcon
        className="h-5 w-5"
        onClick={() => {
          travelers > 0 && setTravelers(travelers - 1);
        }}
      />
      <span className="mx-3 text-lg">{travelers}</span>
      <PlusIcon
        className="h-5 w-5"
        onClick={() => setTravelers(travelers + 1)}
      />
    </div>
  );
};
