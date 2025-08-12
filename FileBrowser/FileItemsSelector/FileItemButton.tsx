import * as React from "react";
import { Component } from "react";

import { FileItem } from "..";

import { style } from "typestyle";

import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

type Props = {
  fileItem: FileItem;
  onClick?: () => void;
  isActive?: boolean;
  isCurrent?: boolean;
};

class FileItemButton extends Component<Props, any> {
  render = () => {
    const { fileItem, onClick, isActive, isCurrent } = this.props;
    // const {  } = this.state;

    const buttonCss = style({
      width: "100%"
    });

    return (
      <Button
        disabled={fileItem.type == "error"}
        className={buttonCss}
        onClick={() => {
          onClick && onClick();
        }}
        startIcon={
          fileItem.type == "directory" ? (
            <FolderIcon />
          ) : /\.blk/gi.test(fileItem.ext) ? (
            <WidgetsOutlinedIcon style={{ color: "yellow" }} />
          ) : fileItem.type == "file" ? (
            <InsertDriveFileOutlinedIcon />
          ) : (
            undefined
          )
        }
        style={{
          backgroundColor: isActive
            ? "#efefef"
            : isCurrent
            ? "#e9edff"
            : undefined
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "left",
            wordWrap: "break-word",
            textTransform: "none"
          }}
        >
          {fileItem.baseName}
        </div>
      </Button>
    );
  };
}

export default FileItemButton;
