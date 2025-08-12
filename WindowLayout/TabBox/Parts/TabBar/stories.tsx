import * as React from "react";
import { Component } from "react";

import { action } from "@storybook/addon-actions";

import TabBar from "./index";
import Tab from "../Tab";
import styled from "styled-components";

export default {
  title: "UIParts/Tab/TabBar",
  component: TabBar,
};

const Wrapper = styled.div`
  width: 200px;
`;

export const Basic = () => (
  <Wrapper>
    <TabBar>
      <Tab>test1</Tab>
      <Tab active>test1</Tab>
      <Tab>test1</Tab>
      <Tab>test1</Tab>
      <Tab>test1</Tab>
      <Tab>test1</Tab>
      <Tab>test1</Tab>
    </TabBar>
  </Wrapper>
);
