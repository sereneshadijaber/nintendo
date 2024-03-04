import React from "react";

const Esrb = () => {
  return (
    <>
      <div className="flex flex-row items-start cursor-pointer justify-start align-start">
        <img
          className="h-14 mr-2"
          src="https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg"
          alt="ESRB Rating"
        />

        <div className="flex flex-col justify-start align-start">
          <p className="font-inter font-light text-xs">
            Fantasy Violence, Use of Alcohol, Use of Tobacco, <br />
            Simulated Gambling, Mild Language, Mild Blood
          </p>
          <hr className="border-b-1 border-gray w-full" />
          <p className="font-inter font-light text-xs">Users Interact</p>
        </div>
      </div>
    </>
  );
};

export default Esrb;
