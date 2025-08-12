import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import { theme } from "../theme";

type Props = {};

const TitleBar = styled.div`
  width: 100%;
  height: 24px;
  margin: 0px;
  background-color: ${theme.BACKGROUND_COLOR_MAIN};
  color: ${theme.TEXT_COLOR_ON_BACKGROUND};
  padding: 2px;
  padding-left: 5px;
  box-sizing: border-box;
`;

export default TitleBar;
