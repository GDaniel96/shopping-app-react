import "./Loading.css";
import React from "react";

const Loading = () => {
  return (
    <div className="ui segment loading-container">
      <div className="ui active inverted dimmer">
        <div className="ui indeterminate text loader">Preparing Files</div>
      </div>
    </div>
  );
};

export default Loading;
