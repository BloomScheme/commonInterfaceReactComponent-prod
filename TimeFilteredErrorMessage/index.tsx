import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type ErrorMessageData =
  | {
      message: string | undefined | null;
      time: number | undefined | null;
    }
  | null
  | undefined;

type Props = {
  viewStartTime?: number;
  errorMessages: ErrorMessageData[];
};

const Wrapper = styled.div`
  display: inline-block;
  color: red;
`;

const TimeFilteredErrorMessage: React.FC<Props> = ({
  errorMessages,
  viewStartTime: now,
}) => {
  const [viewTime, setViewTime ] = React.useState(0)
  React.useEffect(() => {
    setViewTime(Date.now())
  },[])

  return (
    <Wrapper>
      {errorMessages
        .filter(
          (errorMessage) =>
            errorMessage && errorMessage.time && errorMessage.time > (now || viewTime)
        )
        .map((errorMessage, index) =>
          errorMessage ? <div key={index}>{errorMessage.message}</div> : null
        )}
    </Wrapper>
  );
};

export default TimeFilteredErrorMessage;

export const createErrorMessage = ({
  message,
  condition,
}: {
  message: string;
  condition: boolean;
}): ErrorMessageData => (condition ? { message, time: Date.now() } : null);
