import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlightContext from "../context/FlightContext";
import FlightData from "../utils/FlightData";
import { useParams } from "react-router-dom";
// import FilghtCard from './FilghtCard'

const ShowFlight = () => {
  const { viewId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const {viewId}= useParams()
  return (
    
    <FlightContext.Consumer>
      {({ showFlights, flightFilterById }) => {
        console.log(showFlights);
        return showFlights.map(
          ({ price, from, where, id, details, flightLogo, time } = {}) => (
            <div className="border border-[#8DD3BB] border-solid container mx-auto w-5/6 m-5 rounded-lg mt-12">
             
              <div className="flex justify-between items-center">
                <div>
                  <img src={flightLogo} />
                </div>
                <div className="m-5">
                  <p className="text-[16px] font-bold leading-[20px]">{time}</p>
                  <p className="text[32px] font-bold leading-[39px] text-[#FF8682] mt-3">${price}</p>
                  <div className="mt-3">
                    <span className="text-[14px] font-bold leading-[20px]">{where} - </span>
                    <span className="text-[14px] font-bold leading-[20px]">{from}</span>
                  </div>
                </div>
              </div>

              {/* <li>{price}</li>
            <li>{from}</li>
            <li>{where}</li>
            <li>{id}</li> */}
              <div className="text-center">
                <button
                  className="bg-[#8DD3BB]  rounded  m-5 p-3 px-3 text-black font-semibold leading-[17px] text-[14px] rounded w-[300px]"
                  onClick={() => flightFilterById(id)}
                >
                  <Link to={"/show/" + id} key={id}>
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          )
        );
      }}
    </FlightContext.Consumer>
  );
};

export default ShowFlight;
