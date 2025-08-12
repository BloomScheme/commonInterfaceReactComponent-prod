import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

type Props = {

};

const defaults = {
    
};

/**
 * 変数を使いたい場合、変数のジェネレータを用意する
 * ex:
 *  const calcDiameter = (props:Props) => props.height + props.pad
 */
const TextBox = styled.div<Props>``;

export default TextBox;
