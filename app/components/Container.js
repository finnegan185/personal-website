import React, { useEffect } from "react";

function Container(props) {
  return (
    <div className="page">
      <div className={"container py-md-5 container--narrow"}>{props.children}</div>
    </div>
  );
}

export default Container;
