import React from "react";
import { LOGOS } from "../../utils/logos";
function sidebar() {
  return (
    <div className="flex-[0.05] bg-black flex flex-col justify-between items-center pt-6 pb-9">
      <div>{LOGOS.sidebar.mainLogo}</div>
      <div>
        <div className="py-8 px-10">{LOGOS.sidebar.one}</div>
        <div className="py-8 px-10 relative">
          {LOGOS.sidebar.two}{" "}
          <div className="absolute left-0 top-0 bg-white h-full w-[2px]" />
        </div>
        <div className="py-8 px-10">{LOGOS.sidebar.three}</div>
      </div>
      <div className="py-8 px-10">{LOGOS.sidebar.four}</div>
    </div>
  );
}

export default sidebar;
