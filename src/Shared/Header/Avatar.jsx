import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Avatar = () => {
    
   const userImg = "https://i.ibb.co/yQvmGhM/placeholder.jpg";
  return (
    <div>
      <Link to="/">
        <img
          className="rounded-full"
          src={userImg}
          alt="profile"
          width="30"
          height="30"
        />
      </Link>
    </div>
  );
};

export default Avatar;
