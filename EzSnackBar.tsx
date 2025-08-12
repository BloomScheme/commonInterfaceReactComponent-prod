import * as React from "react";
import { Component } from "react";

import { style } from "typestyle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

type Props = {};

type AlertState = {
  message: string;
  severity?: "error" | "info" | "success" | "warning" | undefined;
  autoHideDuration?: number;
  anchorOrigin?: {
    horizontal: "left" | "center" | "right";
    vertical: "top" | "bottom";
  };
};

type State = {
  open: boolean;
} & AlertState;

class EzSnackBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
      message: "",
      autoHideDuration: 6000,
      anchorOrigin: { vertical: "bottom", horizontal: "right" }
    };
  }

  public open = (params: AlertState) => {
    this.setState({ open: true, ...params });
  };

  public close = () => {
    this.setState({ open: false });
  };

  render = () => {
    // const {} = this.props;
    const {
      open,
      message,
      severity,
      autoHideDuration,
      anchorOrigin
    } = this.state;

    const CSS = {};

    return (
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={this.close}
        anchorOrigin={anchorOrigin}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={severity}
          onClose={this.close}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    );
  };
}

export default EzSnackBar;
