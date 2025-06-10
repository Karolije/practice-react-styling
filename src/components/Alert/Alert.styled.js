import styled from "styled-components";

const backgroundColors = {
  primary: () => "#cce5ff",
  secondary: () => "#e2e3e5",
};

const StyledAlert = styled.div`
  display: block;
  color: #004085;
  margin-bottom: 1rem;
  border-color: #b8daff;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  background-color: ${({ variant, theme }) =>
    backgroundColors[variant]?.(theme)};
`;

export { StyledAlert };
