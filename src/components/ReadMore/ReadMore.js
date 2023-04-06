import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
