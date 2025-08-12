import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import TabBar from "./Parts/TabBar";
import Tab from "./Parts/Tab";

type Props = {
  tabs: { title: string; content: React.ReactNode }[];
  controls?: { title: string; onClick: () => void }[];
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  position: relative;
`;

const TabBody = styled.div`
  width: 100%;
  height: calc(100% - 34px);
  margin: 0px;
  padding: 5px;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

const TabBox: React.FC<Props> = (props) => {
  const { tabs, controls } = props;

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      if (event.key === "PageUp") {
        setActiveIndex((activeIndex - 1 + tabs.length) % tabs.length);
      } else if (event.key === "PageDown") {
        setActiveIndex((activeIndex + 1) % tabs.length);
      }
    }
  };
  return (
    <Wrapper onKeyDown={handleKeyDown}>
      <TabBar>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              active={index == activeIndex}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {tab.title}
            </Tab>
          );
        })}
        {controls?.map((control, index) => {
          return (
            <Tab
              key={index}
              onClick={() => {
                control.onClick();
              }}
              isControl
            >
              {control.title}
            </Tab>
          );
        })}
      </TabBar>
      <TabBody>{tabs[activeIndex].content}</TabBody>
    </Wrapper>
  );
};

export default TabBox;
