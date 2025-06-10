import React from "react";

import { StyledButton } from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton
      variant={props.variant}
      size={props.size}
      active={props.active}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
