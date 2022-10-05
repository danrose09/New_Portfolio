import React from "react";
import stats from "../../data/stats";

const Stats = () => {
  const allStats = stats.map((stat, index) => {
    return (
      <p className="stats__name" key={index}>
        {stat.name}: {stat.value}
      </p>
    );
  });

  return <div className="stats">{allStats}</div>;
};

export default Stats;
