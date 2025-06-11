import React from "react";
import { StyledBreadcrumbItem } from "./Breadcrumb.styled";

const BreadcrumbItem = (props) => {
  return (
    <StyledBreadcrumbItem>
      <span>{children}</span>
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
