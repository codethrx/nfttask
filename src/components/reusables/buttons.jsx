import React from "react";
import { useSwiper } from "swiper/react";
function buttons({ LOGOS }) {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="w-[350px] min-h-[78px] bg-black rounded-[39px] p-3 flex items-center justify-between">
        <div
          onClick={() => swiper.slidePrev()}
          className="flex items-center justify-center bg-[] rounded-full h-[56px] w-[56px] bg-gray-level-3 cursor-pointer"
        >
          {LOGOS.arrows.left}
        </div>
        <div
          onClick={() => swiper.slideNext()}
          className="flex items-center justify-center bg-[] rounded-full h-[56px] w-[56px] bg-gray-level-3 cursor-pointer"
        >
          {LOGOS.arrows.right}
        </div>
      </div>
    </div>
  );
}

export default buttons;
