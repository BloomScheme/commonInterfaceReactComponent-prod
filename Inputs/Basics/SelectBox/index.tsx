import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import InlineBlock from "../../../InlineBlock";

type Props = {
  width?: number;
  editable?: boolean;
  size?: number;
  multiple?: boolean;
  onChange?: (value: any) => void;
  selection: { name: string; value: any; selected?: boolean }[];
};

const Viewer = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
`;

const Select = styled.select<{ width: number }>`
  width: ${(props) => props.width}px;
`;

const SelectBox: React.FC<Props> = (props) => {
  const {
    width = 200,
    editable = true,
    onChange,
    selection,
    size = 1,
    multiple = false,
  } = props;

  return (
    <InlineBlock>
      {editable ? (
        <Select
          width={width}
          size={size}
          multiple={multiple}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
        >
          {selection.map((item, index) => (
            <option value={item.value} selected={item.selected} key={index}>
              {item.name}
            </option>
          ))}
        </Select>
      ) : (
        <Viewer width={width}>
          {selection
            .filter((item) => item.selected)
            .map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
        </Viewer>
      )}
    </InlineBlock>
  );
};

export default SelectBox;
