import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import SeeTravel from "./components/SeeTravel";
import ShowFlight from "./components/ShowFlight";
import { Auth0Provider } from "@auth0/auth0-react";
import FlightContext from "./context/FlightContext";
import FlightData from "./utils/FlightData";

import ViewDeatilsPage from "./components/ViewDeatilsPage";
import BookFlight from "./components/BookFlight";
import Payment from "./components/Payment";
import App from "./components/ProductDisplay";
import ProductDisplay from "./components/ProductDisplay";
import Confirmation from "./components/Confirmation";
import Dashboard from "./components/Dashboard";

const AppLayout = () => {
  const [showFlights, setShowFlights] = useState({});
  const [showFlightById, setShowFlightById] = useState({});


  const filterFlight = (values) => {
    // if(!values === " "){
    const filtered = FlightData.filter((item) => {
      // console.log(item)
      return (
        item.from.toLowerCase() === values.from.toLowerCase() &&
        item.where.toLowerCase() === values.where.toLowerCase() &&
        item.date === values.date
      );
    });
    setShowFlights(filtered);

    // }
  };
  const flightFilterById = (id) => {
    const filterId = FlightData.filter((item) => {
      return item.id === id;
    });
    setShowFlightById(filterId);
  };

  return (
    <Auth0Provider
      domain="dev-pb8p43tidtv1ag1w.us.auth0.com"
      clientId="0n9vNg4slg4MNYydSjKfEkqiIf5ey8mX"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <FlightContext.Provider
        value={{ showFlights, filterFlight, flightFilterById, showFlightById }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </FlightContext.Provider>
    </Auth0Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/see",
        element: <SeeTravel />,
      },
      {
        path: "/show",
        element: <ShowFlight />,
      },
      {
        path: "/show/:viewId",
        element: <ViewDeatilsPage />,
      },
      {
        path: "/book",
        element: <BookFlight />,
      },
      {
        path : '/payment',
        element : <Payment/>
      }
      ,
      {
        path : '/checkout',
        element : <ProductDisplay/>
      },
      {
        path : '/confirmed',
        element : <Confirmation/>
      },
      {
        path : '/dashboard',
        element : <Dashboard/>
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
