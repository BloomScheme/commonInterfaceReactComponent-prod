import * as React from "react";

import { action } from "@storybook/addon-actions";

import LabeledInput from "./index";

export default {
  title: "UIParts/Assembled/LabeledInput",
  component: LabeledInput,
};

export const Basic = () => (
  <LabeledInput label="BasicLabel" inputType="text" value={"basic value"}></LabeledInput>
);

export const Number = () => (
  <LabeledInput label="BasicLabel" inputType="number" value={0}></LabeledInput>
);

export const Password = () => (
  <LabeledInput label="BasicLabel" inputType="password" value="basic value"></LabeledInput>
);

export const Multiple = () => (
  <div>
    <LabeledInput label="BasicLabel" defaultValue={"basic value"}></LabeledInput>
    <LabeledInput label="asdf" defaultValue={"basic value"}></LabeledInput>
    <LabeledInput label="aaaa" defaultValue={"basic value"}></LabeledInput>
    <LabeledInput label="asdfasdfasdfasdfas" defaultValue={"basic value"}></LabeledInput>
    <LabeledInput label="asdfasdfasdfasdfasasdfasdfasdfasdfasasdfasdfasdfasdfas" defaultValue={"basic value"}></LabeledInput>
  </div>
);

export const tinyArea = () => (
    <div style={{width:"100px"}}>
      <LabeledInput label="BasicLabel" value={"basic value"}></LabeledInput>
    </div>
  );
  