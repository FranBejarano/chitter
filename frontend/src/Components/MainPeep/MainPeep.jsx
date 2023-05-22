import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TimelinePeep from "../TimelinePeep/TimelinePeep";

const MainPeep = () => {
  const [peepText, setPeepText] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitPeep = await axios.post("/peeps", {
        userId: currentUser._id,
        peepBody: peepText,
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )}

      <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setPeepText(e.target.value)}
          type="text"
          placeholder="What's happening"
          maxLength={280}
          className="bg-slate-200 rounded-lg w-full p-2"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto"
        >
          Peep
        </button>
      </form>
      <TimelinePeep />
    </div>
  );
};

export default MainPeep;
