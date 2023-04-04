// import React, { useState } from "react";
import FlightContext from "../context/FlightContext";
import StripeCheckout from "react-stripe-checkout";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ProductDisplay = () => {
  const navigate = useNavigate();
  const onToken = (token)=>{
    console.log(token)
    navigate('/')
   }
  
 return (
  <FlightContext.Consumer>
    {({ showFlightById }) => {
     
      return showFlightById.map(({ details }) => {
        return (
          <>
          <div>
            <img src={details.img} className ="w-[200px]"/>
            <p>{details.name}</p>
            <p>{details.price}</p>
          </div>
          <section>
          
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
