import axios from "axios";
import React, { useEffect, useState } from "react";

import Peep from "../Peep/Peep";

const TimelinePeep = () => {
  const [timeLine, setTimeLine] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelinePeeps = await axios.get(
          `/peeps/explore`
        );
        setTimeLine(timelinePeeps.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <div className="mt-6 max-w-max">
        {timeLine &&
          timeLine.map((peep) => {
            return (
              <div key={peep._id} className="max-w-screen-md border-y-2 hover:bg-slate-100">
                <Peep peep={peep} />
              </div>
            );
          })}
      </div>

    </>
  );
};

export default TimelinePeep;
