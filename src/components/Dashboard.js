import React, { useState } from 'react'
import FlightContext from '../context/FlightContext'
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <section className='container mx-auto w-5/6 text-center mt-8 '>
        {
        isAuthenticated && <div>
          <h1  className="text-[24px] font-bold leading-[30px] pt-5">{user.name}</h1>
          <p className='pt-3 text-[14px] font-bold leading-[20px] text-[#8DD3BB]'>{user.email}</p>
        </div>
      }
 
    <FlightContext.Consumer>
    {({ showFlightById }) => {
     
      return showFlightById.map(({ details }) => {
        return (
          <>
           <div className='mt-5'>
            <div className='w-3/6 mx-auto '>
            <img src={details.img} className ="w-[500px] rounded-lg"/>
            </div>
         
            <p className="text-[24px] font-bold leading-[30px] pt-5">{details.name}</p>
            <p className='text[32px] font-bold leading-[39px] text-[#FF8682]'>${details.price}</p>
          </div>
          </>
        );
      });
    }}
  </FlightContext.Consumer>
  </section>
  )
}

export default Dashboard