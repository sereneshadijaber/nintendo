import React from "react";
import gameImage from "../../assets/images/imageGame.png";
import Button from "react-bootstrap/Button";

const ReadMore = () => {
  return (
    <div className="flex justify-center p-3">
      <div className="flex justify-around items-start p-3 align-center w-3/4">
        <div className="flex flex-col justify-around items-start text-gray mr-10 overflow-auto w-1/2 gap-1">
          <h className="font-inter font-bold ">
            You're moving to the valley...
          </h>
          <p className="font-inter text-sm font-light">
            You’ve inherited your grandfather’s old farm plot in Stardew Valley.
            Armed with hand-me-down tools and a few coins, you set out to begin
            your new life. Can you learn to live off the land and turn these
            overgrown fields into a thriving home? It won’t be easy. Ever since
            Joja Corporation came to town, the old ways of life have all but
            disappeared. The community center, once the town’s most vibrant hub
            of activity, now lies in shambles. But the valley seems full of
            opportunity. With a little dedication, you might just be the one to
            restore Stardew Valley to greatness!
          </p>
          <p className="font-inter text-sm font-light pt-2">
            Now with Multiplayer! Invite 1-3 players to join you in the valley!
            Players can
          </p>

          <button className="flex flex-row justify-center text-red  pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2 stroke-current stroke-2 fill-red"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-inter font-bold"> Read More</p>
          </button>
          <p className="font-inter text-xs font-light pt-2">
            Software description provided by the publisher.
          </p>
          <Button
            variant="danger"
            className="flex flex-row w-3/4 mr-9 bg-red p-4 pl-8 pr-8 rounded-rounded_btn align-center justify-center text-white mt-2 "
          >
            <p
              className="font-inter font-bold text-sm text-white"
              style={{ color: "white" }}
            >
              Explore this game's official website
            </p>
          </Button>{" "}
        </div>
        <div className="flex flex-row items-center cursor-pointer text-gray text-center w-1/2">
          <img
            className="w-full h-60 rounded-rounded_img"
            src={gameImage}
            alt="game"
          />
        </div>
      </div>
    </div>
  );
};
export default ReadMore;
