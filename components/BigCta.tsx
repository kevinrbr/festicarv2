import React from "react";

type BigCtaProps = {
  title: string;
  subTitle: string;
};

export const BigCta = ({ title, subTitle }: BigCtaProps) => {
  return (
    <button className="bg-primary-300 rounded-lg text-white text-left min-w-[320px] flex justify-center">
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
