import * as React from "react";

import { action } from "@storybook/addon-actions";

import Switch from "./index";

export default {
  title: "UIParts/Buttons/Switch",
  component: Switch,
};

export const Basic = () => <Switch></Switch>;
export const checked = () => <Switch checked></Switch>;
export const BasicLarge = () => <Switch width={80} height={40}></Switch>;
export const checkedLarge = () => (
  <Switch checked width={80} height={40}></Switch>
);
