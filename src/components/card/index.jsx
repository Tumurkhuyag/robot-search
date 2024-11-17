import React from "react";

import "./style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/set_set1/${props.robot.id}.14159?size=200x200`}
        alt=""
      />
      <h3>{props.robot.name}</h3>
      <p>{props.robot.email}</p>
    </div>
  );
};
