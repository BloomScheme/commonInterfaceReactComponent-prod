import * as React from "react";
import { Component } from "react";
declare type Props = {};
declare type State = {
    isOpened: boolean;
};
declare type Options = {
    title?: string;
    children?: React.ReactNode;
};
declare class OkDialog extends Component<Props, State> {
    private options;
    constructor(props: Props);
    open: (options?: Options | undefined) => void;
    private close;
    render: () => JSX.Element;
}
export default OkDialog;
