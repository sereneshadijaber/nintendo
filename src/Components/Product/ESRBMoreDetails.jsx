import React from "react";
import Esrb from "./Esrb";

const ESRBMoreDetails = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex flex-row justify-around justify-center items-center justify-between gap-7">


        <div className="flex flex-col justify-around justify-center items-center justify-between  p-7 pr-10 pl-10 rounded-rounded_btn shadow-md bg-lightGray">
          <p className="font-bold font-inter text-l text-gray">ESRB rating</p>
          <div className="flex flex-col items-center cursor-pointer text-gray text-center bg-white shadow p-4 pr-10 pl-10 rounded-md">
            <Esrb />
          </div>
        </div>

        <div className="flex flex-col justify-around justify-center items-center justify-between gap-5 p-3 pr-10 pl-10 rounded-rounded_btn shadow-md bg-lightGray">
          <p className="font-bold font-inter text-l text-gray">
            Supported play modes
          </p>

          <div className="flex flex-row justify-around justify-center items-center justify-between gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="flex cursor-pointer text-center shadow p-6 pr-12 pl-12 rounded-md bg-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  class="w-5 h-5 fill-white color-white"
                >
                  <path d="M4 5h12v7H4V5Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5v-10Zm16.5 0h-15v10h15v-10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="font-inter font-bold text-gray color-white">TV</p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="flex cursor-pointer text-center shadow p-6 pr-12 pl-12 rounded-md bg-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  class="w-5 h-5 fill-white color-white"
                >
                  <path d="M4 5h12v7H4V5Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5v-10Zm16.5 0h-15v10h15v-10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="font-inter font-bold text-gray">Tabletop</p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="flex cursor-pointer text-center shadow p-6 pr-12 pl-12 rounded-md bg-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  class="w-5 h-5 fill-white color-white"
                >
                  <path d="M4 5h12v7H4V5Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5v-10Zm16.5 0h-15v10h15v-10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="font-inter font-bold text-gray">Handheld</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ESRBMoreDetails;
