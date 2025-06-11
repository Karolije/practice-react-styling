import styled from "styled-components";

export const StyledBreadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
`;
export const StyledBreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StyledBreadcrumbItem = styled.li`
  display: flex;
  align-items: center;

  & + &::before {
    content: "/";
    padding: 0 0.5rem;
    color: #6c757d;
  }

  a {
    text-decoration: none;
    color: ${({ active }) => (active ? "#6c757d" : "#007bff")};
    pointer-events: ${({ active }) => (active ? "none" : "auto")};
    cursor: ${({ active }) => (active ? "default" : "pointer")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  }
`;
