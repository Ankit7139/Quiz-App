import React from "react";

export const Option = (props) => {
  const styles = {
    backgroundColor: props.isClicked ? "#D6DBF5" : "#F5F7FB",
  };
  return (
    <div className="option">
      <button
        className="option--button"
        style={styles}
        //onClick={props.onClick}
        onClick={props.holdOption}
      >
        {props.option}
      </button>
    </div>
  );
};
