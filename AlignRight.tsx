import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  font-size: inherit;
  text-align: right;
  /* width: 100%; */
  display: block;
  box-sizing: border-box;
`;

const AlignRight: React.FC<Props> = (props) => {
  const { children, style } = props;

  return <Wrapper style={{ ...style }}>{children}</Wrapper>;
};

export default AlignRight;
