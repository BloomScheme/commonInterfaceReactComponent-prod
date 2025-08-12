import * as React from "react";
import { Component } from "react";
declare type Props = {
    wrapperRef?: (r: HTMLDivElement) => void;
    style?: React.CSSProperties;
    className?: string;
};
declare class Wrapper extends Component<Props, any> {
    render: () => JSX.Element;
}
export default Wrapper;
