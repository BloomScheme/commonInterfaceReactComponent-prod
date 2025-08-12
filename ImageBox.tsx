import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  maxWidth: number;
  maxHeight: number;
  src: string | undefined;
};

const Wrapper = styled.div<{
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: inline-block;
  vertical-align: middle;
`;

const NoImage = styled.div<{
  width: number;
  height: number;
}>`
  display: inline-block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25) inset;
  background-color: #dfdfdf;
  color: white;
  text-align: center;
  vertical-align: middle;
  // position: relative;
`;

const TextWrapper = styled.div`
  display: inline-block;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  white-space: nowrap;
`;

// https://udomomo.hatenablog.com/entry/2019/11/06/145717
const Image = styled.img<{
  width: number;
  height: number;
}>`
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
  object-fit: contain;
`;

const ImageBox: React.FC<Props> = (props) => {
  const { maxHeight, maxWidth, src } = props;

  return (
    <Wrapper width={maxWidth} height={maxHeight}>
      {src == undefined ? (
        <NoImage width={maxWidth} height={maxHeight}>
          <TextWrapper>No Image</TextWrapper>
        </NoImage>
      ) : (
        <Image src={src} width={maxWidth} height={maxHeight} />
      )}
    </Wrapper>
  );
};

export default ImageBox;
