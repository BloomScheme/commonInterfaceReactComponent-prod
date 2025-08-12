import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import OkDialog from "./OkDialog";

const Wrapper = styled.div`
  display: inline-block;
`;

type Props = {
  onOpen?: Function;
  onConfirm?: Function;
  onCancel?: Function;
  title?: string;
  ButtonComponent?: React.FC;
  children?: React.ReactNode;
};

const Button = styled.button``;

const OkDialogButton: React.FC<Props> = (props) => {
  const {
    children,
    onOpen,
    onConfirm,
    onCancel,
    title,
    ButtonComponent = Button,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [waitForConfirmation, setWaitForConfirmation] = React.useState(false);

  return (
    <Wrapper>
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onOpen && onOpen();
          setOpen(true);
        }}
      >
        <ButtonComponent>{title}</ButtonComponent>
      </div>
      <OkDialog
        title={title}
        open={open}
        onCancel={() => {
          onCancel && onCancel();
          setOpen(false);
        }}
        onConfirm={async () => {
          try {
            onConfirm && (await onConfirm());
            setOpen(false);
          } catch (error) {
            throw error;
          }
        }}
      >
        {children}
      </OkDialog>
    </Wrapper>
  );
};

export default OkDialogButton;
