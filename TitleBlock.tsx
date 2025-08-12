import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  display?: "inline-block" | "block";
  footer?: React.ReactNode;
  close?: boolean;
  closable?: boolean;
  closeOnStart?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children?: React.ReactNode;
};

const borderRadius = 5;

const Wrapper = styled.div<{ display: string; width: string; height: string }>`
  display: ${(props) => props.display};
  box-sizing: border-box;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: ${borderRadius}px;
  margin: 2px;
  background-color: white;
`;

const TitleArea = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  background-color: #2b388d;
  padding: 5px;
  color: white;
  box-sizing: border-box;
  border-radius: ${borderRadius}px ${borderRadius}px 0px 0px;
  position: relative;
`;

const ExpandIconArea = styled.div`
  display: inline-block;
  position: absolute;
  right: 5px;
`;

const Main = styled.div`
  padding: 5px;
  vertical-align: top;
  /* display: inline-block; */
  width: 100%;
  box-sizing: border-box;
`;

const TitleBlock: React.FC<Props> = (props) => {
  const {
    children,
    style,
    width = "100%",
    height = "100px",
    title,
    display = "inline-block",
    footer,
    close,
    closable,
    onClose,
    onOpen,
    closeOnStart = false,
  } = props;
  // const {  } = this.state;

  const [closeState, setCloseState] = React.useState(!!closeOnStart);

  const isClosable =
    (closable != undefined && closable) ||
    !!onClose ||
    !!onOpen ||
    !!closeOnStart;
  const isClose = !isClosable ? false : close || closeState;

  return (
    <Wrapper
      width={width}
      height={!isClose ? height : "unset"}
      display={display}
      style={{ ...style }}
    >
      <TitleArea
        onClick={() => {
          if (isClosable) {
            const newClose = !isClose
            setCloseState(newClose);

            if (newClose) {
              onClose && onClose();
            } else {
              onOpen && onOpen();
            }
          }
        }}
      >
        {title}
        {isClosable ? (
          <ExpandIconArea>
            {closeState ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </ExpandIconArea>
        ) : null}
      </TitleArea>
      {!isClose ? (
        <div>
          <Main>{children}</Main>
          {footer}
        </div>
      ) : null}
    </Wrapper>
  );
};

export default TitleBlock;
