import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div className=" bg-white h-[340px] text-gray rounded-xl shadow">
                <div className="rounded-t-xl">
                  <img
                    src={d.img}
                    alt="gameImage"
                    className="h-44 w-full rounded-t-xl"
                  />
                </div>

                <div className="flex flex-col justify-center gap-2 p-4">
                  <p className="font-inter font-bold text-l  ">{d.name}</p>
                  <p className="pb-5 font-inter font-light text-xs">{d.date}</p>
                  <p className="font-inter font-bold text-">{d.price}</p>
                  <div className="flex flex-row justify-start items-start text-gray align-top">
                    <div className="border-x-2 border-red h-5 mr-2"></div>
                    <p className="">Nintendo Switch</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      class="w-6 h-6 ml-10 stroke-red"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p className="font-inter font-light text-xs pt-10">
          WARNING: If you have epilepsy or have had seizures or other unusual
          reactions to flashing lights or patterns, consult a doctor before
          playing video games. All users should read the Health and Safety
          Information available in the system settings before using this
          software.
        </p>
        <p className="font-inter font-light text-xs pt-4">
          Nintendo Switch Online membership (sold separately) and Nintendo
          Account required for online play. Not available in all countries.
          Internet access required for online features. Terms apply.
          nintendo.com/switch-online
        </p>
        <p className="font-inter font-light text-xs pt-4">
          Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
        </p>
      </div>
    </>
  );
}

const data = [
  {
    name: "Game1",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$2.77",
  },
  {
    name: "Game2",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$3.77",
  },
  {
    name: "Game3",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$4.77",
  },
  {
    name: "Game4",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$5.77",
  },
  {
    name: "Game5",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$5.77",
  },
  {
    name: "Game6",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$5.77",
  },
  {
    name: "Game7",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$5.77",
  },
  {
    name: "Game8",
    date: "9/1/22",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    price: "$5.77",
  },
];

export default ProductCard;
