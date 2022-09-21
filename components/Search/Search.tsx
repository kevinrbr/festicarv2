import { DateTab } from "./SearchBarTab/DateTab";
import { DirectionTab } from "./SearchBarTab/DirectionTab";
import { FestivalTab } from "./SearchBarTab/FestivalTab";
import { TravelersTab } from "./SearchBarTab/TravelersTab";

export const Search = () => {
  return (
    <div className="relative">
      <div className="flex-col md:flex-row bg-white absolute -bottom-8 flex left-1/2 -translate-x-1/2 rounded-lg drop-shadow-md md:min-w-[768px] lg:min-w-[815px] justify-between">
        <div className="min-w-[350px] flex py-4 px-7 md:px-4 md:py-2 flex-col md:flex-row overflow-hidden md:overflow-visible rounded-lg bg-white">
          <FestivalTab />
          <DirectionTab />
          <div className="flex justify-between items-center">
            <DateTab />
            <TravelersTab />
          </div>
        </div>
        <button className="bg-primary-300 text-white px-8 py-3 text-lg rounded-lg border border-white">
          Rechercher
        </button>
      </div>
    </div>
  );
};
