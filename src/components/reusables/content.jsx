import React from "react";
import { LOGOS } from "../../utils/logos";
import { DUMMYDATA } from "../../utils/dummyData";
import Card from "./card";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Buttons from "./buttons";
function content() {
  return (
    <div className="flex-[0.95] bg-[#282A31] rounded overflow-hidden">
      <div className="px-16">
        {/* header1 */}
        <div className="py-5 flex items-center justify-between">
          <div className="text-xl flex items-center px-3 py-2 bg-[#18191D] rounded-[14px]">
            {LOGOS.header.logo1}
            <p className="pl-2">ETH/USDT</p>
            <p className="text-success pl-2">1137.62 +2.62%↑</p>
          </div>
          <div
            className="text-base flex items-center px-3 py-2 bg-[#18191D] rounded-[14px]
          "
          >
            <img
              className="h-6 w-6 rounded-full object-cover"
              src="https://th.bing.com/th?id=OIP.R51U20tJD5Bq_3sKX_LkTQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
            <p className="text-xl ml-3">
              zash{" "}
              <span className="w-[20px] ml-3 mr-1 h-[11px] opacity-[0.5]">
                |
              </span>{" "}
              User ID: 11026666
            </p>
          </div>
        </div>
        {/* header2 */}
        <div className="py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="bg-black h-10 w-10 rounded-[14px] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_3006)">
                <path
                  d="M4.04999 10.9998C4.30287 9.07056 5.25021 7.2996 6.71467 6.01844C8.17912 4.73728 10.0603 4.03377 12.0061 4.03959C13.9518 4.0454 15.8287 4.76016 17.2855 6.05005C18.7423 7.33994 19.679 9.11654 19.9204 11.0473C20.1617 12.978 19.6911 14.9305 18.5967 16.5393C17.5022 18.1481 15.859 19.3029 13.9745 19.7875C12.0901 20.2721 10.0936 20.0533 8.35886 19.172C6.6241 18.2908 5.26999 16.8075 4.54999 14.9998M4.04999 19.9998V14.9998H9.04999"
                  stroke="#808287"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.9212 11.0474C20.1625 12.9781 19.6919 14.9306 18.5975 16.5394C17.503 18.1482 15.8598 19.303 13.9753 19.7876C12.0909 20.2722 10.0944 20.0533 8.35966 19.1721C6.6249 18.2908 5.27078 16.8076 4.55078 14.9999M4.05078 19.9999V14.9999H9.05078"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_3006">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-[75px] px-[51px] ">
        <Swiper
          modules={[Navigation, A11y, Pagination]}
          spaceBetween={105}
          slidesPerView={3}
          breakpoints={{
            425: { slidesPerView: 2 },
            768: { slidesPerView: 2, spaceBetween: 270 },
            1024: { slidesPerView: 3, spaceBetween: 290 },
            1440: { slidesPerView: 4, spaceBetween: 200 },
          }}
        >
          <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hidden">
            {DUMMYDATA.map((data) => (
              <SwiperSlide>
                <Card {...data} />
              </SwiperSlide>
            ))}
          </div>

          <Buttons LOGOS={LOGOS} />
        </Swiper>
      </div>
    </div>
  );
}

export default content;
