import * as React from "react";
import { Component } from "react";

import { style } from "typestyle";

import * as pathlib from "path";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import FolderIcon from "@mui/icons-material/Folder";
import ListIcon from "@mui/icons-material/List";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

type Props = {
  currentPath: string;
  onClick: (path: string) => void;
};

type State = {
  isEditing: boolean;
  edittedPath: string;
};

class FilePathBrowser extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isEditing: false,
      edittedPath: ""
    };
  }

  componentWillUnmount = () => {
    this.setState({ isEditing: false });
  };

  private pathToBreadcrumbPath = (path: string) => {
    const items = path.split("/").filter(item => item != "");
    const paths = [];

    for (let index = 0; index < items.length; index++) {
      paths.push(items.slice(0, index + 1).join("/"));
    }

    return paths;
  };

  private getFilenameFromPath = (path: string) => {
    const items = path.split("/");
    return items[items.length - 1];
  };

  render = () => {
    const { currentPath, onClick } = this.props;
    const { isEditing, edittedPath } = this.state;

    return (
      <div>
        {isEditing ? (
          <Grid
            container
            direction="row"
            // justify="flex-start"
            alignItems="center"
          >
            <Grid>
              <IconButton
                onClick={() => {
                  onClick(edittedPath);
                  this.setState({ isEditing: false });
                }}
              >
                <DoneIcon />
              </IconButton>
            </Grid>

            <Grid>
              <form
                onSubmit={() => {
                  onClick(edittedPath);
                  this.setState({ isEditing: false });
                  return false;
                }}
              >
                <input
                  value={edittedPath}
                  onChange={e => {
                    this.setState({ edittedPath: e.target.value });
                  }}
                />
              </form>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            direction="row"
            // justify="flex-start"
            alignItems="center"
          >
            <Grid>
              <IconButton
                onClick={() => {
                  this.setState({ isEditing: true, edittedPath: currentPath });
                }}
              >
                <EditIcon />
              </IconButton>
            </Grid>

            <Grid>
              <Breadcrumbs
                style={{ whiteSpace: "nowrap" }}
                separator=">"
                itemsBeforeCollapse={0}
                itemsAfterCollapse={3}
              >
                {this.pathToBreadcrumbPath(currentPath)
                  .map((path, index) => (
                    <Button
                      onClick={async () => {
                        onClick(path);
                      }}
                      key={index}
                      style={{
                        display: "inline",
                        textTransform: "none"
                      }}
                    >
                      {this.getFilenameFromPath(path)}
                    </Button>
                  ))
                  .slice(-4)}
              </Breadcrumbs>
            </Grid>
          </Grid>
        )}
      </div>
    );
  };
}

export default FilePathBrowser;
