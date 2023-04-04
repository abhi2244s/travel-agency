import React from "react";
import FallIntoTravel from "./FallIntoTravel";
import FallTravelData from "../utils/FallTravelData";
import FallTravelCard from "./FallTravelCard";
import ButtonSeeAll from "./ButtonSeeAll";

const FallTravel = () => {
  return (
    <>
      <div className=" container mx-auto w-5/6 md:mt-16 mt-8">
        <div className="flex justify-between md:items-center md:flex-row flex-col">
          <div className="md:w-4/6">
            <FallIntoTravel />
          </div>
          <div>
            <ButtonSeeAll />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-16 mt-12 ">
          {FallTravelData.map((item) => {
            return <FallTravelCard {...item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FallTravel;
