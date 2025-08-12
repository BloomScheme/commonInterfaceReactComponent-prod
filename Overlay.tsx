import { Modal } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 95vw;
  max-height: 95vh;
  transform: translate(-50%, -50%);
  overflow: hidden;
  outline: none;
`;

const Overlay: React.FC<Props> = (props) => {
  const { open, children, onClose } = props;

  return (
    <Modal
      open={Boolean(open)}
      onClose={() => {
        onClose && onClose();
      }}
    >
      <Main>{children}</Main>
    </Modal>
  );
};

export default Overlay;
