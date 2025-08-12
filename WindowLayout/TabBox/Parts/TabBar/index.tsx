import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { theme } from "../../../theme";

import styled, { css } from "styled-components";

type Props = {};

const TabBar = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: border-box;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.BACKGROUND_COLOR_MAIN};
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px ${theme.BACKGROUND_COLOR_MAIN};
  }
`;

export default TabBar;
