import React from "react";
import { Text } from "./Card.styled";

const CardText = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default CardText;
