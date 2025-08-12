import * as React from "react";
import { Component } from "react";

import Button from "@mui/material/Button";
import MaterialDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AlignRight from "./AlignRight";
import RoundButton from "./Buttons/RoundButton";

type Props = {
  open?: boolean;
  onClose?: Function;
  title?: string;
  children?: React.ReactNode;
  noFrame?: boolean;
  style?: React.CSSProperties;
  noneBodyTextStyle?: React.CSSProperties;
  fullScreen?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  loadChildrenBeforeOpen?: boolean;
};

const Dialog: React.FC<Props> = (props) => {
  const {
    open,
    onClose,
    title,
    children,
    noFrame,
    style,
    noneBodyTextStyle,
    fullScreen,
    maxWidth,
    loadChildrenBeforeOpen = false,
  } = props;

  if (noFrame) {
    return (
      <div style={{ fontSize: "inherit", ...style }}>
        <MaterialDialog
          style={{ fontSize: "inherit" }}
          open={Boolean(open)}
          onClose={() => {
            onClose && onClose();
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {loadChildrenBeforeOpen ? (
            <div style={style}>{children}</div>
          ) : (
            open && <div style={style}>{children}</div>
          )}
          {onClose && (
            <AlignRight style={{ fontSize: "inherit" }}>
              <RoundButton
                onClick={() => {
                  onClose && onClose();
                }}
                style={{ fontSize: "inherit", ...noneBodyTextStyle }}
              >
                閉じる
              </RoundButton>
            </AlignRight>
          )}
        </MaterialDialog>
      </div>
    );
  } else {
    return (
      <div style={{ fontSize: "inherit", ...style }}>
        <MaterialDialog
          style={{ fontSize: "inherit" }}
          open={Boolean(open)}
          onClose={() => {
            onClose && onClose();
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullScreen={fullScreen}
          maxWidth={maxWidth}
        >
          <DialogTitle id="alert-dialog-title">
            <div style={noneBodyTextStyle}>{title}</div>
          </DialogTitle>
          <DialogContent>
            {loadChildrenBeforeOpen ? (
              <div style={style}>{children}</div>
            ) : (
              open && <div style={style}>{children}</div>
            )}
          </DialogContent>
          {onClose && (
            <DialogActions style={{ fontSize: "inherit" }}>
              <Button
                style={{ fontSize: "inherit", ...noneBodyTextStyle }}
                onClick={() => {
                  onClose && onClose();
                }}
                color="primary"
              >
                閉じる
              </Button>
            </DialogActions>
          )}
        </MaterialDialog>
      </div>
    );
  }
};

export default Dialog;
