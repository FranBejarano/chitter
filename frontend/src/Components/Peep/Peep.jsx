import axios from "axios";
import formatDistance from "date-fns/formatDistance";
import React, { useState } from "react";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Peep = ({ peep, setData }) => {

  const [userData, setUserData] = useState();

  const dateStr = formatDistance(new Date(peep.createdAt), new Date());
  const location = useLocation().pathname;

  console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const findUser = await axios.get(`/users/find/${peep.userId}`);

        setUserData(findUser.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [peep.userId]);



  return (
    <>

      <div>
        {userData && (
          <>
            <div className="flex space-x-2 w-full">
              <Link to={`/profile/${userData._id}`}>
                <h3 className="font-bold">{userData.username}</h3>
              </Link>

              <span className="font-normal">@{userData.username}</span>
              <p> - {dateStr}</p>
            </div>

            <p>{peep.peepBody}</p>

          </>
        )}
      </div>

    </>
  );
};

export default Peep;
