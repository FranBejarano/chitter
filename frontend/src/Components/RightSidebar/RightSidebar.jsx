import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import Signin from "../Signin/Signin";

const RightSidebar = () => {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!currentUser ?
        (<Signin />
        ) : (
          <Link to="/">
            <button
              className="bg-red-500 px-4 py-2 text-white rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        )}
    </>
  );
};

export default RightSidebar;
