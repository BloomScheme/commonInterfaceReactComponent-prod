import { Component } from "react";
declare type Props = {};
declare type AlertState = {
    message: string;
    severity?: "error" | "info" | "success" | "warning" | undefined;
    autoHideDuration?: number;
    anchorOrigin?: {
        horizontal: "left" | "center" | "right";
        vertical: "top" | "bottom";
    };
};
declare type State = {
    open: boolean;
} & AlertState;
declare class EzSnackBar extends Component<Props, State> {
    constructor(props: Props);
    open: (params: AlertState) => void;
    close: () => void;
    render: () => JSX.Element;
}
export default EzSnackBar;
