import { Component } from "react";
declare type Operator = {
    shortcut?: string | Array<string>;
    poll: () => boolean;
    execute: Function;
    description?: Array<string>;
};
declare type Props = {
    operator: Operator;
};
declare class OperatorTooltip extends Component<Props, any> {
    render: () => JSX.Element;
}
export default OperatorTooltip;
