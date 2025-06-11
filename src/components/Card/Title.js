import React from "react";
import { Title } from "./Card.styled";

const CardTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

export default CardTitle;
