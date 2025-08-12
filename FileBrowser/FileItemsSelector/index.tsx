import * as React from "react";
import { Component } from "react";
import { FileItem } from "..";

import { style } from "typestyle";

import ScrollBox from "../../ScrollBox";

import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ListIcon from "@mui/icons-material/List";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import FileItemButton from "./FileItemButton";

type Props = {
  fileItems: FileItem[];
  fileFilter?: RegExp;
  directoryFilter?: RegExp;
  onFileClick: (fileitem: FileItem) => Promise<void>;
  onDirectoryClick: (fileitem: FileItem) => Promise<void>;
  onUpperDirectoryClick?: () => Promise<void>;
  currentPath?: string;
};

type State = {
  currentItem: FileItem | null;
};

class FileItemsSelector extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentItem: null
    };
  }

  private isActive = (fileItem: FileItem) => {
    const { currentItem } = this.state;

    return currentItem == fileItem;
  };

  private isCurrent = (fileItem: FileItem) => {
    const { currentPath } = this.props;

    if (currentPath) {
      if (fileItem.path == currentPath) {
        return true;
      }
    }

    return false;
  };

  render = () => {
    const {
      fileItems,
      fileFilter = /.*/gi,
      directoryFilter = /.*/gi,
      onFileClick,
      onDirectoryClick,
      onUpperDirectoryClick,
      currentPath
    } = this.props;

    const { currentItem } = this.state;

    const sorter = (a: FileItem, b: FileItem) => {
      return a.baseName == b.baseName ? 0 : a.baseName < b.baseName ? -1 : 1;
    };
    const directories = fileItems
      .filter((fileItem: FileItem) => fileItem.type == "directory")
      .sort(sorter);
    const files = fileItems
      .filter((fileItem: FileItem) => fileItem.type == "file")
      .sort(sorter);
    const errors = fileItems
      .filter((fileItem: FileItem) => fileItem.type == "error")
      .sort(sorter);

    const buttonCss = style({
      width: "100%"
    });

    return (
      <ScrollBox>
        {onUpperDirectoryClick ? (
          <Button
            className={buttonCss}
            onClick={() => {
              onUpperDirectoryClick();
            }}
          >
            <div style={{ width: "100%", textAlign: "left" }}>
              <ArrowUpwardOutlinedIcon />
            </div>
          </Button>
        ) : null}

        {fileItems.length == 0 ? <Typography>no item.</Typography> : null}

        {directories.map((fileItem: FileItem, index: number) => {
          return (
            <FileItemButton
              fileItem={fileItem}
              onClick={() => {
                onDirectoryClick(fileItem);
                this.setState({ currentItem: fileItem });
              }}
              isActive={this.isActive(fileItem)}
              isCurrent={this.isCurrent(fileItem)}
              key={index}
            />
          );
        })}

        {files.map((fileItem: FileItem, index: number) => {
          return (
            <FileItemButton
              fileItem={fileItem}
              onClick={() => {
                onFileClick(fileItem);
                this.setState({ currentItem: fileItem });
              }}
              isActive={this.isActive(fileItem)}
              isCurrent={this.isCurrent(fileItem)}
              key={index}
            />
          );
        })}

        {errors.map((fileItem: FileItem, index: number) => {
          return <FileItemButton fileItem={fileItem} key={index} />;
        })}
      </ScrollBox>
    );
  };
}

export default FileItemsSelector;
