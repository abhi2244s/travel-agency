import React, { useEffect } from "react";
import FallTravelMoreData from "../utils/FallTravelMoreData";
import FallTravelCard from "./FallTravelCard";

const SeeTravel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-16 w-5/6 mx-auto mt-12">
      {FallTravelMoreData.map((item) => {
        return <FallTravelCard {...item} key={item.id} />;
      })}
    </div>
  );
};

export default SeeTravel;
