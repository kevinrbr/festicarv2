import React from "react";
import { wayType } from "./../types/addJouney/wayType";

type BigCtaProps = {
  title: string;
  subTitle: string;
  setWayType: React.Dispatch<React.SetStateAction<wayType>>;
};

export const BigCta = ({ title, subTitle, setWayType }: BigCtaProps) => {
  return (
    <button
      className="bg-primary-300 rounded-lg text-white text-left min-w-[320px] flex justify-center"
      onClick={() => setWayType("go")}
    >
      <div className="py-4">
        <h3 className="font-heading font-semibold text-2xl">{title}</h3>
        <div className="flex items-center">
          <span className="mr-6 whitespace-nowrap text-sm">{subTitle}</span>
          <i className="gg-arrow-long-right top-[1px] w-full"></i>
        </div>
      </div>
    </button>
  );
};
