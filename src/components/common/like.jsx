import React from "react";

const Like = props => {
  let classes = "fa fa-star";
  if (!props.liked) classes += "-o";
  if (props.completed) return null;

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      area-hidden="true"
    />
  );
};

export default Like;
