import styled from "styled-components";

const backgroundColors = {
  primary: (theme) => theme?.colors?.primary || "#007bff",
  secondary: (theme) => theme?.colors?.secondary || "#e2e3e5",
};

const hoverColors = {
  primary: (theme) => theme?.colors?.primaryHover || "#0056b3",
  secondary: (theme) => theme?.colors?.secondaryHover || "#d6d8db",
};

const sizes = {
  lg: (theme) => theme?.buttonPadding?.lg || "0.5rem 1rem",
  sm: (theme) => theme?.buttonPadding?.sm || "0.5rem 0.25rem",
};

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: ${({ size, theme }) => sizes[size]?.(theme)};
  font-size: 1.25rem;
  line-height: 1.5rem;
  border-radius: 0.3rem;
  color: #fff;
  border-color: #007bff;
  background-color: ${({ variant, theme }) =>
    backgroundColors[variant]?.(theme)};

  &:hover {
    background-color: ${({ variant, theme }) => hoverColors[variant]?.(theme)};
  }

  ${({ active }) =>
    active &&
    `
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    transform: translateY(1px);
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.65;
    pointer-events: none;
  `}
`;

export { StyledButton };
