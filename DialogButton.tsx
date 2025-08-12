import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import Dialog from "./Dialog";

const Wrapper = styled.div`
  display: inline-block;
  font-size: inherit;
`;

type Props = {
  onOpen?: Function;
  onClose?: Function;
  title: string;
  ButtonComponent?: React.FC;
  noFrame?: boolean;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  noneBodyTextStyle?: React.CSSProperties;
  children?: React.ReactNode;
  fullScreen?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  loadChildrenBeforeOpen?: boolean;
};

const Button = styled.button``;

const DialogButton: React.FC<Props> = (props) => {
  const {
    children,
    onOpen,
    onClose,
    title,
    ButtonComponent = Button,
    noFrame,
    style,
    noneBodyTextStyle,
    fullScreen,
    maxWidth,
    loadChildrenBeforeOpen 
  } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <Wrapper>
      <div
        onClick={() => {
          onOpen && onOpen();
          setOpen(true);
        }}
      >
        <ButtonComponent>{title}</ButtonComponent>
      </div>
      <Dialog
        title={title}
        open={open}
        onClose={() => {
          onClose && onClose();
          setOpen(false);
        }}
        noFrame={noFrame}
        style={style}
        noneBodyTextStyle={noneBodyTextStyle}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        loadChildrenBeforeOpen={loadChildrenBeforeOpen}
      >
        {children}
      </Dialog>
    </Wrapper>
  );
};

export default DialogButton;
