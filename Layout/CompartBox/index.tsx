import * as React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import styled, { css } from "styled-components";
import SizeGetter, { ComponentSize } from "../SizeGetter";

type Props = {
  top?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: React.ReactNode;
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  vertical-align: top;
`;

const Main = styled.div<{ width: string; height: string }>`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
`;

const CompartBox: React.FC<Props> = ({ children, top, left, right, bottom }) => {
  const zeroSize = {
    width: 0,
    height: 0,
  };

  const [wrapperSize, setWrapperSize] = React.useState<ComponentSize>({
    ...zeroSize,
  });

  const [topSize, setTopSize] = React.useState<ComponentSize>({
    ...zeroSize,
  });
  const [bottomSize, setBottomSize] = React.useState<ComponentSize>({
    ...zeroSize,
  });
  const [leftSize, setLeftSize] = React.useState<ComponentSize>({
    ...zeroSize,
  });
  const [rightSize, setRightSize] = React.useState<ComponentSize>({
    ...zeroSize,
  });

  const surroundingSize = {
    width: leftSize.width + rightSize.width,
    height: topSize.height + bottomSize.height,
  };

  const mainSize = {
    width: wrapperSize.width - surroundingSize.width - 1,
    height: wrapperSize.height - surroundingSize.height - 1,
  };

  return (
    <SizeGetter
      style={{ width: "100%", height: "100%", verticalAlign: "top" }}
      onSizeChanged={(size) => {
        size && setWrapperSize(size);
      }}
    >
      {top && (
        <SizeGetter
          onSizeChanged={(size) => {
            size && setTopSize(size);
          }}
        >
          {top}
        </SizeGetter>
      )}
      <Container
        style={{
          width: "100%",
          height: `${mainSize.height}px`,
        }}
      >
        {left && (
          <SizeGetter
            style={{ display: "inline-block", height: `${mainSize.height}px` }}
            onSizeChanged={(size) => {
              size && setLeftSize(size);
            }}
          >
            {left}
          </SizeGetter>
        )}
        <Main width={`${mainSize.width}px`} height={`${mainSize.height}px`}>
          {children}
        </Main>
        {right && (
          <SizeGetter
            style={{ display: "inline-block", height: `${mainSize.height}px` }}
            onSizeChanged={(size) => {
              size && setRightSize(size);
            }}
          >
            {right}
          </SizeGetter>
        )}
      </Container>
      {bottom && (
        <SizeGetter
          onSizeChanged={(size) => {
            size && setBottomSize(size);
          }}
        >
          {bottom}
        </SizeGetter>
      )}
    </SizeGetter>
  );
};

export default CompartBox;
