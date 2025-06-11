import React from "react";
import {
  StyledCard,
  StyledCardImg,
  StyledCardBody,
  StyledCardTitle,
  StyledCardText,
} from "./Card.styled";

import Button from "../Button";

const Card = ({ title, text, imgSrc, buttonText }) => {
  return (
    <StyledCard>
      {imgSrc && <StyledCardImg src={imgSrc} alt={title} />}
      <StyledCardBody>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardText>{text}</StyledCardText>
        {buttonText && (
          <Button variant="primary" size="lg">
            {buttonText}
          </Button>
        )}
      </StyledCardBody>
    </StyledCard>
  );
};

export default Card;
