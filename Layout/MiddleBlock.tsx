import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import InlineBlock from "../InlineBlock";

type Props = {
  width?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
`;

const MiddleBlock: React.FC<Props> = (props) => {
  const { children, width } = props;

  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};

export default MiddleBlock;
