import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import InlineBlock from "../InlineBlock";

type Props = {
  width?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  /* width: 100%; */
  display: block;
  text-align: center;
  /* box-sizing: border-box; */
  margin: 0px;
  padding: 0px;
`;
const CenterBlock: React.FC<Props> = (props) => {
  const { children, width } = props;

  return (
    <Wrapper>
      <InlineBlock width={width}>{children}</InlineBlock>
    </Wrapper>
  );
};

export default CenterBlock;
