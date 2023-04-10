import React, { useState } from "react";
import g from "../images/g.png";
import l from "../images/l.png";
import o from "../images/o.png";
import b from "../images/b.png";
import e from "../images/e.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();
 

  return (
    <>
      <div className="flex justify-between w-5/6 container mx-auto mt-5 items-center">
        <div>
          <Link to="/">
            <h1 className="font-semibold leading-[17px] text-[14px]">
              Find Flights
            </h1>
          </Link>
        </div>
        <Link to="/">
          <div className="flex">
            <img src={g} alt="g" className="w-[19px] h-[19px]" />
            <img src={l} alt="g" className="w-[19px] h-[19px]" />
            <img src={o} alt="g" className="w-[19px] h-[19px]" />
            <img src={b} alt="g" className="w-[19px] h-[19px]" />
            <img src={e} alt="g" className="w-[19px] h-[19px]" />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
              alt="hamburger-menu"
              className="w-[30px] md:hidden flex mx-5"
              onClick={() => setShow(!show)}
            />
          </div>
        </Link>
        <div className="md:flex hidden space-x-6 ">
          <span>{isAuthenticated && <p className="pt-1">{user.name}</p>}</span>
          {isAuthenticated ? (
            
            <div>
            <button
              className="bg-[#112211] rounded p-2 px-3 text-white font-semibold leading-[17px] text-[14px]"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
            <button className="bg-[#112211] rounded p-2 px-3 text-white font-semibold leading-[17px] text-[14px] mx-2"><Link to = "/dashboard" >Dashboard</Link></button>
            </div>
          ) : (
            <button
              className="font-semibold leading-[17px] text-[14px]"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
           
          )}
        </div>
      </div>
      <div className=" mt-5 ">
        {show && (
          <div className="flex md:hidden space-x-6 flex-col border border-white shadow-lg transition delay-150 duration-300 ease-in-out w-5/6 mx-auto p-5 rounded-lg">
            <span>{isAuthenticated && <p>{user.name}</p>}</span>
            {isAuthenticated ? (
              <div>
              <button
                className="bg-[#112211] rounded p-2 px-3 text-white font-semibold leading-[17px] text-[14px]"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
              <button className="bg-[#112211] rounded p-2 px-3 text-white font-semibold leading-[17px] text-[14px] mx-2"><Link to = "/dashboard">Dashboard</Link></button>
              </div>
            ) : (
              <button
                className="font-semibold leading-[17px] text-[14px]"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
