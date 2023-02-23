import React from "react";
import { FlexCol } from "../../Styles";

const Card = ({ data, setState }) => {
  const boxNavs = {
    minWidth: "380px",
    margin: "1%",
    flexShrink: 0,
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "1px 1px 10px -8px black",
  };
  const card_caption = {
    pointerEvents: "none",
    textAlign: "center",
    height: "auto",
    padding: "4px",
    flex: 1,
    flexDirection: "row",
    color: "black",
    textTransform: "uppercase",
    fontFamily: "impact",
    fontSize: 30,
    lineHeight: 2,
    position: "absolute",
    top: "40%",
    width: "100%",
  };
  const card_body = {
    position: "relative",
    height: "360px",
    width: "auto",
    flexDirection: "row",
    flex: 9,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "0.4s ease-in",
  };
  return (
    <FlexCol style={boxNavs} onClick={() => setState(data.stateName)}>
      <div
        className="onView"
        style={{ ...card_body, backgroundImage: data.thumbnail }}
      ></div>
      <div className="onhover-red boxes" style={card_caption}>
        {data.name}
      </div>
    </FlexCol>
  );
};

export default Card;
