import * as React from "react";

import { action } from "@storybook/addon-actions";

import CompartBox from "./index";
import styled, { css } from "styled-components";

export default {
  title: "FullBox",
  component: CompartBox,
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
`;

const Main = styled.div`
  width: 200%;
  height: 200%;
  background-color: red;
`;

export const Basic = () => (
  <Wrapper>
    <CompartBox
      top={<div>top</div>}
      left={<div>left</div>}
      right={<div>right</div>}
      bottom={<div>bottom</div>}
    >
      <Main>main</Main>
    </CompartBox>
  </Wrapper>
);

Basic.story = {
  name: "basic",
};
