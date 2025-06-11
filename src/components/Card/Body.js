import React from "react";
import { Body } from "./Card.styled";

const CardBody = ({ children, ...props }) => {
  return <Body {...props}>{children}</Body>;
};

export default CardBody;
