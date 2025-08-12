import * as React from "react";
import { Component } from "react";

import { withStyles } from "@mui/material/styles";

import { styled } from "@mui/system";

import MaterialSwitch from "@mui/material/Switch";
// https://material-ui.com/api/switch/

type Props = {
  checked?: boolean;
  width?: number;
  height?: number;
  onChange?: (value: boolean) => void;
  onClick?: () => void;
};

// const Switch = (props: Props) => withStyles({})(MaterialSwitch);
const Switch = (props: Props) => {
  const { width = 40, height = 20, onChange, onClick } = props;

  const pad = height / 5;
  const thumbDiameter = height - pad;

  const styles = {
    root: {
      width,
      height,
      padding: 0,
      // margin: theme.spacing(1),
    },
    switchBase: {
      padding: pad / 2,
      "&$checked": {
        transform: `translateX(${width - thumbDiameter - pad}px)`,
        color: "white",
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
    },
    thumb: {
      width: thumbDiameter,
      height: thumbDiameter,
    },
    track: {
      borderRadius: (thumbDiameter + pad) / 2,
      // border: `1px solid ${theme.palette.grey[400]}`,
      // backgroundColor: theme.palette.grey[50],
      opacity: 1,
      // transition: theme.transitions.create(["background-color", "border"]),
      backgroundColor: "#72767d",
    },
    checked: {},
  };

  const Styled = styled(MaterialSwitch)(styles);

  return (
    <Styled
      {...{ ...props, onChange: undefined, onMouseUp: undefined }}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.checked);
      }}
      onClick={onClick}
    ></Styled>
  );
};

export default Switch;
