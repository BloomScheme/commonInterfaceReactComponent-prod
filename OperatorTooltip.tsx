import * as React from "react";
import { Component } from "react";

import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

type Operator = {
  shortcut?: string | Array<string>;
  poll: () => boolean;
  execute: Function;
  description?: Array<string>;
};

type Props = {
  operator: Operator;
  children?: React.ReactNode;
};

class OperatorTooltip extends Component<Props, any> {
  render = () => {
    const { children, operator } = this.props;
    // const {  } = this.state;

    return operator.description || operator.shortcut ? (
      <Tooltip
        title={
          <React.Fragment>
            <div>
              {operator.description?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            {operator.shortcut ? (
              <div>ショートカット：{operator.shortcut}</div>
            ) : null}
          </React.Fragment>
        }
      >
        <Box style={{ display: "inline-block" }}>{children}</Box>
      </Tooltip>
    ) : (
      <Box style={{ display: "inline-block" }}>{children}</Box>
    );
  };
}

export default OperatorTooltip;
