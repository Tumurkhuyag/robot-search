import React from "react";

import "./style.css";

export const SearchField = (props) => {
  return (
    <input
      className="search-field"
      type="search"
      placeholder="Роботын нэрийг оруулна уу"
      // When user types, onChange triggers and calls searchingRobot
      onChange={props.searchingRobot}
    />
  );
};
