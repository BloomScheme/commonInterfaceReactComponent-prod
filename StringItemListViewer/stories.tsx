import * as React from "react";
import { Component } from "react";

import { action } from "@storybook/addon-actions";

import StringItemListViewer from "./index";

export default {
  title: "UIParts/StringItemListViewer",
  component: StringItemListViewer,
};

const items = [
  "sadf",
  "wqerqwe",
  "asdbcvbsfhg",
  "awexzca",
  "awedxzczx",
  "asxzcw",
];

export const Basic = () => (
  <StringItemListViewer
    items={items}
    onClick={(item) => {
      console.log(`item`, item);
    }}
    currentItem={"wqerqwe"}
  ></StringItemListViewer>
);
