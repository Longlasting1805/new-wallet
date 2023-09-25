import React from "react";

export const Tab = ({tab, handleTabChange}) => {
  return (
    <div onClick={() => handleTabChange(tab.name)}>
      <img src={tab.image} />
      <p className="card-text">{tab.name}</p>
    </div>
  );
};
