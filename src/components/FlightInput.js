import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FlightContext from "../context/FlightContext";
import FlightData from "../utils/FlightData";
// import FilghtCard from './FilghtCard';
import ShowFlight from "./ShowFlight";
// import FilghtCard from './FilghtCard';

const FlightInput = (props) => {
  const initialValues = {
    from: "",
    date: "",
    where: "",
  };

  const [values, setValues] = useState(initialValues);
  // const[filterValue,setFilterValue]= useState(FlightData)
  const [filteredData, setFilteredData] = useState([]);
  function swap() {
    const tempValue = values.from;
    setValues({ from: values.where, where: tempValue });
  }

  function filter(filterFlight) {
    filterFlight(values);
  }

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <FlightContext.Consumer>
        {({ filterFlight, showFlights }) => (
          <section>
            <h2 className="text-[24px] font-bold leading-[30px] text-center pt-8">Please fill in input field :-</h2>
            <p className="text-[15px] font-bold leading-[20px] text-center pt-5">Lucknow--Delhi--08/03/2023</p>
          <div className="flight-input-conatiner container mx-auto w-5/6  space-x-6 my-5 lg:h-[250px] h-auto md:mt-8 rounded-lg">
            <h1 className=" font-semibold text-[20px] leading-[24px] pt-12 w-5/6 mx-12">
              Where are you flying
            </h1>
            <div className="pt-8  flex flex-wrap">
              <input
                type="text"
                placeholder="Where from"
                className="border border-[#dadce0] border-solid p-3 px-8 md:m-5 m-3 rounded"
                value={values.where}
                onChange={handleInputChange}
                name="where"
                label="where"
                required
                
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FTUzZK7ecZs1KkEb94wEPOmZVpzFAkwpnk2U4A8&s"
                alt="arrow"
                onClick={swap}
                className="w-[30px] cursor-pointer m-5"
              />
              <input
                type="text"
                placeholder="from to"
                className="border border-[#dadce0] border-solid p-3 px-8 md:m-5 m-3 rounded"
                value={values.from}
                onChange={handleInputChange}
                name="from"
                label="from"
                required
              />
              <input
                type="date"
                placeholder="Date"
                className="border border-[#dadce0] border-solid p-3 px-8 md:m-5 m-3"
                value={values.date}
                onChange={handleInputChange}
                name="date"
                label="date"
                required
              />

              <button
                className="bg-[#8DD3BB]  rounded  m-5 p-3 px-3 text-black font-semibold leading-[17px] text-[14px] rounded"
                onClick={() => filter(filterFlight)}
              >
                <Link to="/show">Show Flights</Link>
              </button>
            </div>
          </div>
          </section>
        )}
      </FlightContext.Consumer>

      {filteredData.map((items) => {
        console.log(items);
        return <ShowFlight {...items} />;
      })}
    </>
  );
};

export default FlightInput;
