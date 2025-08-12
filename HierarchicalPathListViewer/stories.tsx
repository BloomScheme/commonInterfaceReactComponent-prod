import * as React from "react";
import { Component } from "react";

import { action } from "@storybook/addon-actions";

import HierarchicalPathListViewer from "./index";
import PathListViewer from "./PathListViewer";

export default {
  title: "UIParts/HierarchicalPathListViewerTsx",
  component: HierarchicalPathListViewer,
};

const pathList = [
  "/path/abc/def/asdf",
  "/path/abc/def/asdf/asdfsadf",
  "/path/abc/def/asdf/12345",
  "/path/abc/def/asdf/l1l1l1",
  "/path/abc/def/asdf/1234",
  "/path/abc/asdlkfj",
  "/path/abc/lkadlasjlf",
  "/path/abc/192ioqpie",
  "/path/abc/213i41op2",
  "/path/abc/213i41op2/salkdf;lsakdfa",
  "/path/abc/213i41op2/iafiwefuj",
  "/path/abc/213i41op2/sdkjfadfj",
  "/asfd/abc/213i41op2/sdkjfadfj",
  "/asfd/asfabc/213i41op2/sdkjfadfj",
  "/asfd/asfasdfabc/213i41op2/sdkjfadfj",
  "/asfd/asfasdfasdfabc/213i41op2/sdkjfadfj",
  "/alot/0",
  "/alot/1",
  "/alot/2",
  "/alot/3",
  "/alot/4",
  "/alot/5",
  "/alot/6",
  "/alot/7",
  "/alot/8",
  "/alot/9",
  "/alot/q",
  "/alot/w",
  "/alot/e",
  "/alot/r",
  "/alot/t",
  "/alot/y",
  "/alot/u",
  "/alot/i",
  "/alot/o",
  "/alot/p",
  "/alot/@",
  "/alot/[",
  "/alot/a",
  "/alot/s",
  "/alot/d",
  "/alot/f",
  "/alot/g",
  "/alot/h",
  "/alot/j",
  "/alot/k",
  "/alot/l",
  "/alot/;",
  "/alot/:",
  "/alot/z",
];

export const Basic = () => {
  const [currentPath, setCurrentPath] = React.useState("/");

  return (
    <HierarchicalPathListViewer
      pathList={pathList}
      currentPath={currentPath}
      onClick={(path: string) => {

        setCurrentPath(path);
      }}
    ></HierarchicalPathListViewer>
  );
};

export const _PathListViewer = () => {
  const [currentPath, setCurrentPath] = React.useState("/");

  return (
    <PathListViewer
      pathList={pathList}
      currentPath={currentPath}
      onClick={(path: string) => {

        setCurrentPath(path);
      }}
    ></PathListViewer>
  );
};
