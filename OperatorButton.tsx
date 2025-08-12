import * as React from "react";
import { Component } from "react";

import Button from "@mui/material/Button";
import OperatorTooltip from "./OperatorTooltip";

type Operator = {
  shortcut?: string | Array<string>;
  poll: () => boolean;
  execute: Function;
  description?: Array<string>;
};

type Props = {
  children?: React.ReactNode;
  operator: Operator;
};

class OperatorButton extends Component<Props, any> {
  render = () => {
    const { children, operator } = this.props;

    return (
      <OperatorTooltip operator={operator}>
        <Button
          disabled={!operator.poll()}
          onClick={() => {
            operator.execute();
          }}
        >
          {children}
        </Button>
      </OperatorTooltip>
    );
  };
}

export default OperatorButton;
