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
            <div className=" container mx-auto w-5/6">
              <div className="flex justify-between">
                <div className="m-5">
                  <p className="text-[24px] font-bold leading-[30px]">{details.name}</p>
                </div>
                <div className="m-5">
                  <p className="text[32px] font-bold leading-[39px] text-[#FF8682]">${details.price}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="m-5 flex space-x-6">
                  <div className="w-[38px] h-[28px] rounded border border-[#8DD3BB] text-center">
                  <span>{details.rating} </span>
                  </div>
                <div>
                <span  className="text-[15px] font-bold leading-[22px]">Very Good {details.reviews} Reviews</span>
                </div>
          
                </div>
                <div className="text-center ">
                <button className="bg-[#8DD3BB]  rounded  m-5 p-3 px-3 text-black font-semibold leading-[17px] text-[14px] rounded ">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
              </div>
              <div>
                <img src={details.img} className="rounded-lg" />
              </div>
            </div>
          );
        });
      }}
    </FlightContext.Consumer>
  );
};

export default ViewDeatilsPage;
