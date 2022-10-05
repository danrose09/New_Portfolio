import React from "react";
import stats from "../../data/stats";

const Stats = () => {
  const allStats = stats.map((stat, index) => {
    return (
      <p className="stats__info" key={index}>
        <i className={`${stat.icon} fa-2x`}></i>
        {stat.name}: {stat.value}
      </p>
    );
  });

  return <div className="stats">{allStats}</div>;
};

export default Stats;
