import * as React from "react";

import { action } from "@storybook/addon-actions";

import LabeledTextArea from "./index";

export default {
  title: "UIParts/Assembled/LabeledTextArea",
  component: LabeledTextArea,
};

export const Basic = () => <LabeledTextArea label="basic"></LabeledTextArea>;
export const value = () => (
  <LabeledTextArea
    label="value"
    value={`asdfjklasdfjaslkd
asdflkasdjfklsadjflkasd
asdflkjasdlfajlk`}
  ></LabeledTextArea>
);

export const valueOverflow = () => (
    <LabeledTextArea
      label="value"
      value={
`asdfjklasdfjaslkd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkjasdlfajlk`}
    ></LabeledTextArea>
  );
  

export const preview = () => (
  <LabeledTextArea
    preview
    label="value"
    value={`asdfjklasdfjaslkd
asdflkasdjfklsadjflkasd
asdflkjasdlfajlk`}
  ></LabeledTextArea>
);


export const preveiwOverflow = () => (
    <LabeledTextArea
      preview
      label="value"
      value={
`asdfjklasdfjaslkd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkasdjfklsadjflkasd
asdflkjasdlfajlk`}
    ></LabeledTextArea>
  );
  