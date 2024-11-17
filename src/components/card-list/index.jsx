import React from "react";

import "./style.css";
import { Card } from "../card";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.robots.map((el) => (
        <Card robot={el} />
      ))}
    </div>
  );
};
