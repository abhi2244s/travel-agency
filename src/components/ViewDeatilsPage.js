import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FlightContext from "../context/FlightContext";

const ViewDeatilsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { viewId } = useParams();
  return (
    <FlightContext.Consumer>
      {({ showFlightById }) => {
        return showFlightById.map(({ details }) => {
          return (
            <div className="border border-black border-solid container mx-auto w-5/6">
              <div className="flex justify-between">
                <div className="m-5">
                  <p>{details.name}</p>
                </div>
                <div className="m-5">
                  <p>starting from {details.price}</p>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-[#8DD3BB]  rounded  m-5 p-3 px-3 text-black font-semibold leading-[17px] text-[14px] rounded w-[300px]">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
              <div>
                <img src={details.img} />
              </div>
            </div>
          );
        });
      }}
    </FlightContext.Consumer>
  );
};

export default ViewDeatilsPage;
