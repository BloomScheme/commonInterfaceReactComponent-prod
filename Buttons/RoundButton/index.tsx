import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";
import defaultTheme from "../../defaultTheme";

type Props = {
  aggressive?: boolean;
  danger?: boolean;
  disabled?: boolean;
  buttonTheme?: ButtonTheme;
} & EventCallbacks;

console.log(`defaultTheme`, defaultTheme);
const getTheme = (props: Props) =>
  props.buttonTheme?.common ? props.buttonTheme : defaultTheme;

const RoundButton = styled.button<Props>`
  font-size: inherit;
  border: 1px solid #777;
  border-radius: 15px;
  padding: 5px 10px;
  :focus {
    outline: none;
  }

  ${(props) =>
    !props.aggressive && !props.danger
      ? css`
          color: ${getTheme(props).common.normal.color};
          background-color: ${getTheme(props).common.normal.background};
          :active {
            color: ${getTheme(props).common.active.color};
            border-color: ${getTheme(props).common.active.color};
          }
        `
      : null}

  ${(props) =>
    props.aggressive
      ? css`
          color: ${getTheme(props).aggressive.normal.color};
          background-color: ${getTheme(props).aggressive.normal.background};
          border: none;
          :active {
            background-color: ${getTheme(props).aggressive.active.background};
          }
        `
      : null}

  ${(props) =>
    props.danger
      ? css`
          color: ${getTheme(props).danger.normal.color};
          background-color: ${getTheme(props).danger.normal.background};
          border: none;
          :active {
            background-color: ${getTheme(props).danger.active.background};
          }
        `
      : null}

${(props) =>
    props.disabled
      ? css`
          color: ${getTheme(props).disabled.normal.color};
          background-color: ${getTheme(props).disabled.normal.background};
          border: none;
          :active {
            background-color: ${getTheme(props).disabled.active.background};
          }
        `
      : null}
`;

export default RoundButton;
