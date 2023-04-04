import React from "react";
import FlightContext from "../context/FlightContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Payment from "./Payment";

const BookFlight = () => {
  const { isAuthenticated, user } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const handlePayment = ()=>{
    if(!isAuthenticated){
      return loginWithRedirect()
    }
    else{
      <Payment/>
    }
  }
  return (
    <FlightContext.Consumer>
      {({ showFlightById }) => {
        return showFlightById.map(({ details }) => {
          return (
            <div className="w-5/6 container mx-auto">
              <div className="flex  justify-between">
                <div className="border border-[#FFFFFF] shadow-lg w-4/6 m-5">
                  <div>
                    <img src={details.flightLogo} />
                  </div>
                  <div className="flex justify-between flex-wrap ">
                    <div className="m-4">
                      <p>{details.name}</p>
                    </div>
                    <div className="m-4">
                      <p>{details.price}</p>
                    </div>
                  </div>
                  <div className="text-center my-2">
                    <p>{details.time}</p>
                  </div>
                </div>
                <div className="border border-[#FFFFFF] shadow-lg w-[400px] m-5  ">
                  <div className=" flex items-center justify-between">
                    <div className="m-3">
                      <img src={details.img} className="h-[120px] rounded" />
                    </div>
                    <div className="m-3">
                      <p>{details.name}</p>
                    </div>
                    <hr />
                  </div>

                  <div>
                    <p className="p-3">Your booking is protected by golobe</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="p-3">Total</p>
                    <p className="p-3">{details.price}</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-[#FFFFFF] shadow-lg text-center m-5">
                <button className="bg-[#8DD3BB]  rounded  m-5 p-3 px-3 text-black font-semibold leading-[17px] text-[14px] rounded w-[300px]" onClick={handlePayment}>
                  <Link to="/checkout">
                    Pay Now
                  </Link>
                </button>
              </div>
              
             
            </div>
          );
        });
      }}
    </FlightContext.Consumer>
  );
};

export default BookFlight;
