import * as React from "react";
import { Component } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress } from "@mui/material";

type Props = {
  open?: boolean;
  onConfirm?: Function;
  onCancel?: Function;
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

const OkDialog: React.FC<Props> = (props) => {
  const { open, onCancel, onConfirm, title, children, disabled } = props;

  const [isBusy, setIsBusy] = React.useState(false);

  return (
    <div>
      <Dialog
        open={Boolean(open)}
        onClose={() => {
          !isBusy && onCancel && onCancel();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <div>{children}</div>
        </DialogContent>
        {isBusy ? (
          <DialogActions>
            <CircularProgress />
          </DialogActions>
        ) : (
          <DialogActions>
            <Button
              onClick={() => {
                onCancel && onCancel();
              }}
              color="primary"
              disabled={isBusy}
            >
              キャンセル
            </Button>
            <Button
              onClick={async () => {
                setIsBusy(true);
                onConfirm && (await onConfirm());
                setIsBusy(false);
              }}
              color="primary"
              disabled={isBusy || disabled}
            >
              OK
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

export default OkDialog;
