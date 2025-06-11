import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #dee2e6;
`;
export const TabButton = styled.button`
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  border: 1px solid transparent;
  will-change: color;

  border-color: ${({ active }) =>
    active ? "#dee2e6 #dee2e6 #fff" : "transparent"};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin-right: 0.1rem;
  margin-bottom: -1px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  color: ${({ active, disabled }) =>
    disabled ? "#6c757d" : active ? "#495057" : "#007bff"};
  font-weight: 500;

  &:hover {
    ${({ disabled, active }) =>
      disabled
        ? `
          border: inherit;
          color: #6c757d;
        `
        : `
          border: 1px solid #e9ecef;
          border-bottom: ${active ? "none" : "1px solid #e9ecef"};
          color: ${active ? "#495057" : "#0056b3"};
        `}
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const TabContent = styled.div`
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-top: none;
  border-radius: 0 0.25rem 0.25rem 0.25rem;
`;
