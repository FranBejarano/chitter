import React from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import MainPeep from "../../Components/MainPeep/MainPeep";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import TimelinePeep from "../../Components/TimelinePeep/TimelinePeep";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {!currentUser ? (
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <LeftSidebar />
          </div>
          <div className="col-span-2 border-x-2 border-t-slate-800">
            <TimelinePeep />
          </div>
          <div className="px-6">
            <RightSidebar />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <LeftSidebar />
          </div>
          <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
            <MainPeep />
          </div>
          <div className="px-6">
            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
