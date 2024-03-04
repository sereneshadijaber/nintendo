import React, { useState } from "react";
import gameImage from "../../assets/images/imageGame.png";
import Esrb from "./Esrb";
import CustomButton from "./CustomButton";
import ESRBMoreDetails from "./ESRBMoreDetails";


const Product = () => {
  const [images, setImages] = useState({
    img1: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
    img2: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.125/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01",
    img3: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.125/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot02",
    img4: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.125/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03",
    img5: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.125/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot04",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  return (
    <>
      <div className="flex justify-around items-center p-3">
        <div className="flex flex-row justify-around justify-center items-center text-gray justify-between gap-10 p-8 rounded-rounded_btn shadow-md">
          <div className="flex flex-row items-center cursor-pointer text-gray text-center">
            <div className="flex flex-col gap-6">
              <img
                className="w-120 h-80 rounded-rounded_img"
                src={activeImg}
                alt="game"
              />

              <div className="flex flex-row justify-between h-16 gap-5 ">
                <img
                  className="h-10 w-30 rounded-lg cursor-pointer filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                  src={images.img1}
                  alt="game"
                />
                <div className="drop-shadow-md hover:drop-dropShadow-xl">
                  {" "}
                  <img
                    className="h-10 rounded-lg cursor-pointer hover:underline filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                    src={images.img2}
                    alt="game"
                    onClick={() => setActiveImage(images.img2)}
                  />
                </div>

                <img
                  className="h-10 rounded-lg cursor-pointer filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                  src={images.img3}
                  alt="game"
                  onClick={() => setActiveImage(images.img3)}
                />
                <img
                  className="h-10 rounded-lg cursor-pointer filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                  src={images.img4}
                  alt="game"
                  onClick={() => setActiveImage(images.img4)}
                />
                <img
                  className="h-10 rounded-lg cursor-pointer filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                  src={images.img5}
                  alt="game"
                  onClick={() => setActiveImage(images.img5)}
                />
                <img
                  className="h-10 rounded-lg cursor-pointer border filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                  src={images.img1}
                  alt="game"
                  onClick={() => setActiveImage(images.img1)}
                />
                <img
                  className="h-10 rounded-lg cursor-pointer border filter saturate-50  border-transparent transition duration-300  hover:saturate-100"
                  src={images.img1}
                  alt="game"
                  onClick={() => setActiveImage(images.img1)}
                />
              </div>
              <Esrb></Esrb>
            </div>
          </div>

          <div className="flex flex-col justify-around items-start text-gray gap-4 align-top">
            <div className="flex flex-row justify-start items-start text-gray align-top">
              <div className="border-x-2 border-red h-5 mr-2"></div>
              <p>Nintendo Switch</p>
            </div>

            <h1 className="font-inter font-bold text-2xl">Stardew Valley</h1>
            <h2 className="font-inter font-bold text-2xl">$14.99</h2>

            <div className="flex flex-row justify-start items-center text-gray align-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
              </svg>
              <p className="font-inter text-xs">
                Eligible for up to <span className="font-bold">75</span> Gold
                Points
              </p>
            </div>
            <CustomButton />
            <p className="font-inter text-xs">
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>


        
        </div>
      </div>
    </>
  );
};

export default Product;
