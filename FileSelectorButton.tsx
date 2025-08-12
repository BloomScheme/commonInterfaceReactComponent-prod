import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import styled, { css } from "styled-components";
import InlineBlock from "./InlineBlock";

type Props = {
  title: string;
  onChange: (files: FileList) => void;
  ButtonComponent?: React.FC;
  accept?: string;
};

const Button = styled.button``;

const FileSelectorButton: React.FC<Props> = (props) => {
  const { title, onChange, ButtonComponent = Button, accept } = props;

  const [id, setId] = React.useState(uuid());
  const idName = `file_upload_${id}`;

  return (
    <InlineBlock>
      <ButtonComponent>
        <label htmlFor={idName}>
          {title}

          <input
            type="file"
            accept={accept}
            id={idName}
            style={{ display: "none" }}
            value=""
            onChange={(e) => {
              const files = e.target.files;
              files && onChange(files);

              // value=""で常にクリアされる
              // e.target.value = "";
            }}
          />
        </label>
      </ButtonComponent>
    </InlineBlock>
  );
};

export default FileSelectorButton;
