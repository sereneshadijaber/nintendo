import React from "react";

const FooterCC = () => {
  return (
    <>
      <div className="flex justify-around items-center  border-lightGray border-b-2  bg-gray pr-10 pl-10 p-5">
        <div className="w-full flex justify-center items-center">
          <p className="text-white color-white text-xs">
            © Nintendo. Games are property of their respective owners. Nintendo
            of America Inc. Headquarters are in Redmond, Washington, USA
          </p>
        </div>

        <div className="flex flex-row items-center justify-end w-full text-gray gap-5">
          <div className="flex flex-row items-center cursor-pointer text-gray hover:text-red">
            <p className="text-white font-bold text-xs hover:underline">Contact</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer text-gray hover:text-red">
            <p className="text-white font-bold text-xs hover:underline">Website Feedback</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer text-gray hover:text-red">
            <p className="text-white font-bold text-xs hover:underline">Terms of Use</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer text-gray hover:text-red">
            <p className="text-white font-bold text-xs hover:underline"> Documents & Policies</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterCC;
