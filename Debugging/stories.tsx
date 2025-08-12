import * as React from "react";

import { action } from "@storybook/addon-actions";

import { JSONViewer, JSONBox, ObjectViewer } from "./index";

export default {
  title: "UIParts/Debugging/JSONView",
  component: JSONViewer,
};

export const Basic = () => <JSONViewer json={{ test: 100 }} />;
export const _JSONBox = () => <JSONBox json={{ test: 100 }} />;
export const _ObjectViewer = () => (
  <ObjectViewer
    object={{
      string: "sdfasdfsa",
      number: 123123,
      object: { test: 2342, test1: "asdlkf" },
      undefined: undefined,
      null: null,
      true: true,
      false: false,
      array: [1, 2, 3, "asdf", "asdf", { asdf: "asdf" }],
    }}
  />
);
