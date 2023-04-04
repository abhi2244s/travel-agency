import React from "react";
import ButtonTravel from "./ButtonTravel";

const FallTravelCard = ({ price, title, about, img }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="lg:h-[400px]  lg:w-[266px] rounded-lg "
      >
        <div className="flex justify-between p-5 md:pt-[256px] pt-[30px] flex-wrap">
          <div>
            <h1>{title}</h1>
            <h1>{about}</h1>
          </div>
          <div>
            <h1>{price}</h1>
          </div>
        </div>
        <div className="text-center py-5 lg:py-0">
          <ButtonTravel />
        </div>
      </div>
    </div>
  );
};

export default FallTravelCard;
