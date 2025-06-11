import styled from "styled-components";

export const StyledCard = styled.div`
  width: 18rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCardBody = styled.div`
  padding: 1rem;
`;

export const StyledCardTitle = styled.h5`
  margin: 0 0 0.5rem 0;
`;

export const StyledCardText = styled.p`
  margin: 0 0 1rem 0;
  color: #555;
`;
