import * as React from "react";
import { Component } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {};

type State = {
  isOpened: boolean;
};

type Options = {
  title?: string;
  children?: React.ReactNode | string;
};

class AlertDialog extends Component<Props, State> {
  private onConfirm: Function | undefined;
  private onCancel: Function | undefined;
  private options: Options | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  alert = async (
    title: string,
    children: React.ReactNode | string
  ): Promise<boolean> => {
    return new Promise(resolve => {
      this.open(
        () => {
          resolve(true);
        },
        () => {
          resolve(false);
        },
        {
          title,
          children
        }
      );
    });
  };

  private open = (
    onConfirm?: Function,
    onCancel?: Function,
    options?: Options
  ) => {
    this.onConfirm = onConfirm;
    this.onCancel = onCancel;
    this.options = options;
    this.setState({ isOpened: true });
  };

  private close = (confirmed: boolean) => {
    const { onConfirm, onCancel } = this;


    this.setState({ isOpened: false }, () => {


      if (confirmed) {
        onConfirm && onConfirm();
      } else {
        onCancel && onCancel();
      }
    });
  };

  render = () => {
    // const {  } = this.props;
    const { isOpened } = this.state;

    // const {children, title} = this.options;
    const children = this.options?.children;
    const title = this.options?.title;

    return (
      <div>
        <Dialog
          open={isOpened}
          onClose={() => {
            this.close(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {children}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.close(false);
              }}
              color="inherit"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.close(true);
              }}
              color="primary"
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
}

export default AlertDialog;
