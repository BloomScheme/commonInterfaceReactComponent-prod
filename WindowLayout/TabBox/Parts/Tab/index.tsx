import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import { theme } from "../../../theme";

type Props = {};

const Tab = styled.div<{ active?: boolean; isControl?: boolean }>`
  background-color: ${(props) =>
    props.isControl
      ? "lightgray"
      : props.active
      ? theme.BACKGROUND_COLOR_MAIN
      : theme.BACKGROUND_COLOR_MAIN_NOT_ACTIVE};
  color: ${theme.TEXT_COLOR_ON_BACKGROUND};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: inline-block;
  padding: 2px;
  padding-right: 4px;
  margin: 0px;
  margin-top: 1px;
  font-size: small;
  min-width: 50px;
  text-align: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Tab;
