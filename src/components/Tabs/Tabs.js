import React, { useState } from "react";
import { TabsContainer, TabList, TabButton, TabContent } from "./Tabs.styled";

const Tabs = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i, disabled) => {
    if (!disabled) {
      setActiveIndex(i);
    }
  };
  return (
    <TabsContainer>
      <TabList>
        {childrenArray.map((child, i) => {
          const disabled = child.props.disabled;
          return (
            <TabButton
              key={i}
              onClick={() => handleClick(i, disabled)}
              active={activeIndex === i}
              disabled={disabled}
            >
              {child.props.title}
            </TabButton>
          );
        })}
      </TabList>
      <TabContent>{childrenArray[activeIndex]}</TabContent>
    </TabsContainer>
  );
};

export default Tabs;
