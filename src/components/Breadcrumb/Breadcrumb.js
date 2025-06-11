import React from "react";
import { StyledBreadcrumb, StyledBreadcrumbList } from "./Breadcrumb.styled";
const Breadcrumb = (props) => {
  return (
    <StyledBreadcrumb>
      <StyledBreadcrumbList>{props.children}</StyledBreadcrumbList>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
