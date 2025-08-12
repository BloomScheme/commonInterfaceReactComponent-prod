import * as React from "react";
import { Component } from "react";
import { FileSystem } from "..";

import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import Separation from "../../Separation";
import ScrollBox from "../../ScrollBox";
import AlertDialog from "../../AlertDialog";

type Props = {
  currentPath: string;
  filesystem: FileSystem;
  resolve: (path: string | undefined) => void;
};

type State = {
  filename: string;
};

class SaveFile extends Component<Props, State> {
  private alert: AlertDialog | null;

  constructor(props: Props) {
    super(props);
    this.state = {
      filename: "",
    };
  }

  setFileName = (name: string) => {
    this.setState({ filename: name });
  };

  private save = async () => {
    const { filesystem, currentPath, resolve } = this.props;
    const { filename } = this.state;

    // const savePath = /\.blk/gi.test(filename)
    //   ? `${currentPath}/${filename}`
    //   : `${currentPath}/${filename}.blk`;

    const savePath = `${currentPath}/${filename}`;

    if (await filesystem.check(savePath)) {
      // 既にある
      // ダイアログだす

      if (
        await this.alert?.alert(
          "ファイルが既に存在します",
          <div>上書きしますか？</div>
        )
      ) {
        resolve(savePath);
      }

      return;
    }

    resolve(savePath);
  };

  render = () => {
    // const {  } = this.props;
    const { filename } = this.state;

    return (
      <Separation.Container>
        <Separation.Content size="auto">
          <ScrollBox>
            <form
              onSubmit={(e) => {
                this.save();
                e.preventDefault();
                return false;
              }}
            >
              <input
                style={{
                  width: "99%",
                  marginTop: "15px",
                }}
                onChange={(e) => {
                  this.setState({ filename: e.target.value });
                }}
                value={filename}
              />
            </form>
            <AlertDialog ref={(r) => (this.alert = r)} />
          </ScrollBox>
        </Separation.Content>

        <Separation.Content size="50px">
          <IconButton
            onClick={() => {
              this.save();
            }}
            disabled={filename == ""}
          >
            <SaveIcon />
          </IconButton>
        </Separation.Content>
      </Separation.Container>
    );
  };
}

export default SaveFile;
