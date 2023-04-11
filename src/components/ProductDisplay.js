// import React, { useState } from "react";
import FlightContext from "../context/FlightContext";
import StripeCheckout from "react-stripe-checkout";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ProductDisplay = () => {
  const navigate = useNavigate();
  const onToken = (token)=>{
    console.log(token)
    navigate('/confirmed')
    
   }
  
 return (
  <FlightContext.Consumer>
    {({ showFlightById }) => {
     
      return showFlightById.map(({ details }) => {
        return (
          <>
          <div className="container mx-auto w-5/6 text-center mt-12">
            <div className="w-3/6 mx-auto">
            <img src={details.img} className ="w-[500px] rounded-lg "/>
            </div>
          
            <p className="text-[24px] font-bold leading-[30px] pt-3">{details.name}</p>
            <p  className="text[32px] font-bold leading-[39px] text-[#FF8682] pt-2">${details.price}</p>
          </div>
          <section className="w-5/6 container mx-auto text-center">
          
           <StripeCheckout
              name={details.name}
              amount={details.price }  
              token={onToken}
              currency = "inr"
              stripeKey="pk_test_51MqjTPSBSdZwL20SitEnhpVMMHXgqeEJtUn9uGZou7JiJ3MVCBJqpZl6gvh0ZABCcVRybsBiTxwtiFBA6OQ2HBoJ00tG9r5HJL"
             /> 
          </section>
          </>
        );
      });
    }}
  </FlightContext.Consumer>
 )
 
  };

export default ProductDisplay;
