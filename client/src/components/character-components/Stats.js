import React, { Fragment, useEffect } from "react";
import stats from "../../data/stats";
import AOS from "aos";
import "aos/dist/aos.css";

const Stats = (props) => {
  const { elementIsVis } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const allStats = stats.map((stat, index) => {
    return (
      <Fragment>
        <p className="stats__info" key={index}>
          <i className={`${stat.icon} fa-2x stats__icon`}></i>
          {stat.name}
        </p>
        <div
          className={
            elementIsVis ? `stats__bar  stats__bar--${index + 1}` : null
          }
          style={{ width: `${stat.value}%` }}
        ></div>
      </Fragment>
    );
  });

  return <div className="stats">{allStats}</div>;
};

export default Stats;
