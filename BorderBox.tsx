import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  border: 1px solid black;
  display: inline-block;
`;
const BorderBox: React.FC<Props> = (props) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default BorderBox;
