import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import Overlay from "./Overlay";

const Wrapper = styled.div`
  display: inline-block;
`;

type Props = {
  onOpen?: Function;
  onClose?: Function;
  title: string;
  ButtonComponent?: React.FC;
  triggerClose?: boolean;
  openOnStart?: boolean;
  children?: React.ReactNode;
};

const Button = styled.button``;

const OverlayButton: React.FC<Props> = (props) => {
  const {
    children,
    onOpen,
    onClose,
    title,
    ButtonComponent = Button,
    triggerClose,
    openOnStart = false,
  } = props;

  const [open, setOpen] = React.useState(openOnStart);

  React.useEffect(() => {
    if (open && triggerClose) {
      setOpen(false);
      onClose && onClose();
    }
  }, [open, triggerClose]);

  return (
    <Wrapper>
      <div
        onClick={(e) => {
          onOpen && onOpen();
          setOpen(true);
          e.stopPropagation();
        }}
      >
        <ButtonComponent>{title}</ButtonComponent>
      </div>
      <Overlay
        open={open}
        onClose={() => {
          onClose && onClose();
          setOpen(false);
        }}
      >
        {open && children}
      </Overlay>
    </Wrapper>
  );
};

export default OverlayButton;
