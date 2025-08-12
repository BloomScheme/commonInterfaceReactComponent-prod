import * as React from "react";
import { Component } from "react";
import { style } from "typestyle";

import * as pathlib from "path";

import RandomColorBox from "../RandomColorBox";
import Separation from "../Separation";
import ScrollBox from "../ScrollBox";
import FileItemsSelector from "./FileItemsSelector";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import FilePathBrowser from "./FilePathBrowser";
import SaveFile from "./SaveFile";

export type PathItem = {
  path: string;
  type: "file" | "directory" | "error";
};

export type FileItem = {
  type: "directory" | "file" | "error";
  name: string;
  ext: string;
  baseName: string;
  path: string;
};

export type FileSystem = {
  read: (path: string) => Promise<string>;
  readBase64: (path: string) => Promise<string>;
  write: (path: string, value: Record<string, any> | string) => Promise<void>;
  listDir: (path: string) => Promise<PathItem[]>; // フルパスのリスト
  check: (path: string) => Promise<boolean>;
};

/**
 * ダイアログ操作オプション。
 */
type Options = {
  createDirectory?: boolean;
  deleteFile?: boolean;
  deleteDirectory?: boolean;
  renameFile?: boolean;
  selectMulti?: boolean;
  fileFilter?: RegExp;
};

type BrowserSettings = {
  path: string | undefined;
  resolve: Function;
  reject: Function;
  options: Options | undefined;
  mode: "open" | "save";
  title: string;
};

type State = {
  isOpen: boolean;
  currentPath: string;
  fileItems: FileItem[];
  viewFileItems: FileItem[];
  parentDirectories: FileItem[];
  settings: BrowserSettings;
};

type Props = {
  multipleFiles?: boolean;

  filesystem: FileSystem;
};

const createFileItemFromPathItem = (pathItem: PathItem): FileItem => {
  const { path, type } = pathItem;

  const baseName = pathlib.basename(path);
  const ext = pathlib.extname(baseName);
  const name = baseName.replace(new RegExp(`${ext}$`, "gi"), "");

  return {
    type,
    name,
    ext,
    baseName,
    path,
  };
};

class FileBrowser extends Component<Props, State> {
  private saveFile: SaveFile | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      currentPath: "",
      fileItems: [],
      viewFileItems: [],
      parentDirectories: [],
      settings: {
        path: undefined,
        resolve: () => undefined,
        reject: () => undefined,
        options: undefined,
        mode: "open",
        title: "",
      },
    };
  }

  /**
   * 選択したパスのリストを返す。
   */
  open = async (
    path?: string | undefined,
    options?: Options
  ): Promise<string[] | undefined> => {
    console.log(`open path`, path);

    return new Promise<string[] | undefined>((resolve, reject) => {
      this.openBrowser({
        path,
        resolve,
        reject,
        mode: "open",
        options,
        title: "ファイルを開く",
      });
    });
  };

  /**
   * 新規作成・上書きしたらtrueを返す。
   * キャンセルでfalse。
   */
  save = async (
    path?: string | undefined,
    options?: Options
  ): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve, reject) => {
      this.openBrowser({
        path,
        resolve,
        reject,
        mode: "save",
        options,
        title: "ファイルを保存する",
      });
    });
  };

  private openBrowser = async (settings: BrowserSettings) => {
    const { path } = settings;

    console.log(`openBrowser path`, path);

    this.setState({ isOpen: true, settings });

    const lastPath = localStorage.getItem("lastOpenedDirectory");

    await this.loadDirectory(path || lastPath || "c://");
  };

  private closeBrowser = () => {
    this.setState({ isOpen: false });
  };

  private loadDirectory = async (path: string) => {
    const { filesystem } = this.props;

    const fileItems = (await filesystem.listDir(path)).map(
      (pathItem: PathItem) => createFileItemFromPathItem(pathItem)
    );

    // ここでエラーが起きてる
    const upperDirectory = this.getUpperDirectory(path);
    const parentDirectories =
      upperDirectory == ""
        ? []
        : (await filesystem.listDir(upperDirectory))
            .map((pathItem: PathItem) => createFileItemFromPathItem(pathItem))
            .filter((item) => item.type == "directory");

    // if (parentDirectories.length == 0) {
    //   return;
    // }

    this.setState(
      {
        currentPath: path,
        fileItems,
        viewFileItems: fileItems,
        parentDirectories,
      },
      () => {
        this.forceUpdate();
      }
    );

    localStorage.setItem("lastOpenedDirectory", path);
    return;
  };

  private getUpperDirectory = (path: string) => {
    const items = path.split("/");
    return items.slice(0, items.length - 1).join("/");
  };

  private normalizePath = (path: string) => {
    return path.replace(/\\/gi, "/").replace(/\/+/gi, "/").replace(/:/, ":/");
  };

  private filterFileItems = (
    fileItems: FileItem[],
    fileFilter: RegExp | undefined
  ): FileItem[] => {
    if (fileFilter == undefined) {
      return fileItems;
    }

    return fileItems.filter(
      (fileItem) =>
        fileItem.type == "directory" || fileFilter.test(fileItem.path)
    );
  };

  render = () => {
    const { filesystem } = this.props;

    const { isOpen, currentPath, viewFileItems, parentDirectories, settings } =
      this.state;

    const filter = settings.options?.fileFilter;

    return (
      <Dialog
        fullScreen
        open={
          isOpen
          // || true
        }
      >
        <Separation.Container vertical>
          <Separation.Content size="50px">
            {/* タイトルバー */}
            <Grid
              container
              direction="row"
              // justify="space-between"
              alignItems="center"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#3f51b5",
                color: "white",
              }}
            >
              <Grid>
                <IconButton
                  style={{ color: "white" }}
                  onClick={() => {
                    this.closeBrowser();
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>

              <Grid>
                <div style={{ marginRight: "10px" }}>{settings.title}</div>
              </Grid>
            </Grid>
          </Separation.Content>

          <Separation.Content size="50px">
            {/* ファイルパス */}
            <FilePathBrowser
              currentPath={this.normalizePath(currentPath)}
              onClick={async (path: string) => {
                await this.loadDirectory(this.normalizePath(path));
              }}
            />
          </Separation.Content>

          <Separation.Content size="auto">
            {/* ファイルブラウザ */}
            <Separation.Container horizontal>
              <Separation.Content size="40%">
                {/* 親フォルダのディレクトリ一覧 */}

                <FileItemsSelector
                  fileItems={parentDirectories}
                  onFileClick={async (fileItem) => {}}
                  onDirectoryClick={async (fileItem) => {
                    this.loadDirectory(fileItem.path);
                  }}
                  currentPath={currentPath}
                />
              </Separation.Content>

              <Separation.Content size="auto">
                {/* FileItemsViewer */}
                <FileItemsSelector
                  onUpperDirectoryClick={async () => {
                    await this.loadDirectory(
                      this.getUpperDirectory(currentPath)
                    );
                  }}
                  fileItems={this.filterFileItems(viewFileItems, filter)}
                  onFileClick={async (fileItem) => {
                    if (settings.mode == "open") {
                      settings.resolve([fileItem.path]);
                      this.closeBrowser();
                    }

                    if (settings.mode == "save") {
                      this.saveFile?.setFileName(fileItem.baseName);
                    }
                  }}
                  onDirectoryClick={async (fileItem) => {
                    this.loadDirectory(fileItem.path);
                  }}
                />
              </Separation.Content>
            </Separation.Container>
          </Separation.Content>

          <Separation.Content size={settings.mode == "save" ? "50px" : "0px"}>
            {/* セーブ部分 */}
            <SaveFile
              ref={(r) => (this.saveFile = r)}
              currentPath={currentPath}
              filesystem={filesystem}
              resolve={(path: string | undefined) => {
                settings.resolve(path);
                this.closeBrowser();
              }}
            />
          </Separation.Content>
        </Separation.Container>
      </Dialog>
    );
  };
}

export default FileBrowser;
