import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = () => {
  return (
    <>
      <div>
        <Button variant="danger" className="flex flex-row w-full mr-9 bg-red p-5 pl-10 pr-10 rounded-rounded_btn align-center justify-center text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="w-6 h-6 mr-4"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="font-inter font-bold text-white"  style={{ color: "white" }}>Direct Download</p>
        </Button>{" "}
      </div>
    </>
  );
};
export default CustomButton;
