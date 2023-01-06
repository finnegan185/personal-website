import React, { useEffect } from "react";

function Container(props) {
  return (
    <div className="page">
      <div className={"container py-md-5"}>{props.children}</div>
    </div>
  );
}

export default Container;
