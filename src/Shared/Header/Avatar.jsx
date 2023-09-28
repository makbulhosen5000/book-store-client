import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Avatar = () => {
  const {user} = useContext(AuthContext);

    
   const avatarUrl = "https://i.ibb.co/yQvmGhM/placeholder.jpg";
   
  return (
    <div>
      <Link to="/">
        <img
          className="rounded-full"
          src={user && user?.photoURL ? user?.photoURL : avatarUrl}
          alt="profile"
          width="30"
          height="30"
        />
      </Link>
    </div>
  );
};

export default Avatar;
