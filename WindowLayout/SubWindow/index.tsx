import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import TitleBar from "../TitleBar";
import { theme } from "../theme";

const WindowFrame = styled.div<{ width?: string; height?: string }>`
  border: 2px solid ${theme.BACKGROUND_COLOR_MAIN};
  margin: 0px;
  padding: 0px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  background-color: white;
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
`;

const WindowBody = styled.div<{ noScroll: boolean }>`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: calc(100% - 24px);
  position: relative;
  overflow: ${(props) => (props.noScroll ? "hidden" : "auto")};
`;

type Props = {
  children?: React.ReactNode;
  noScroll?: boolean;
  title?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  onClose?: Function;
};

const CloseButton = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  background: transparent;
  border: white 1px solid;
  color: white;
`;

const SubWindow: React.FC<Props> = (props) => {
  const {
    children,
    title = "",
    style,
    width,
    height,
    noScroll,
    onClose,
  } = props;

  const _style: React.CSSProperties = {
    ...style,
    width,
    height,
  };

  return (
    <WindowFrame width={width} height={height}>
      <TitleBar>{title}</TitleBar>
      <WindowBody noScroll={Boolean(noScroll)}>{children}</WindowBody>
      {onClose ? (
        <CloseButton
          onClick={() => {
            onClose();
          }}
        >
          ×
        </CloseButton>
      ) : null}
    </WindowFrame>
  );
};

export default SubWindow;
