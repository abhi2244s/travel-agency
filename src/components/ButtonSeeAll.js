import React from "react";
import { Link } from "react-router-dom";

const ButtonSeeAll = () => {
  return (
    <div className="md:mt-0 mt-5">
      <Link to="/see">
        <button className="text-[14px] leading-[17px] border border-[#8DD3BB] p-2 rounded px-3">
          See All
        </button>
      </Link>
    </div>
  );
};

export default ButtonSeeAll;
