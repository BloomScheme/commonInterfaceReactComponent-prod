import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

type Props = {
  width?: number | string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const numberToPx = (value: number | string) => {
  if (Number.isFinite(value)) {
    return `${value}px`;
  }
  return value;
};

const StyledComponent = styled.div`
  ${(props: { width?: number | string }) => {
    if (props.width) {
      return "width: " + numberToPx(props.width);
    }
    return "";
  }}

  display: inline-block;
  text-align: right;
  /* overflow: hidden; */
  vertical-align: top;
  word-break: break-all;
`;
const InputLabel: React.FC<Props> = (props) => {
  const { width } = props;

  return <StyledComponent {...props}></StyledComponent>;
};

export default InputLabel;
