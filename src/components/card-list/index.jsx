import React from "react";

import "./style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.robots.map((el) => (
        <div key={el.id}>{el.name}</div>
      ))}
    </div>
  );
};
