import { useState } from "react";

const valueToNumber = (value: Value): number => {
  if (typeof value == "number") {
    return value;
  }

  if (value == "") {
    return 0;
  }

  try {
    return parseFloat(value);
  } catch (error) {
    return 0;
  }
};

export default function useNumberState(defaultValue: Value = 0) {
  const [value, setState] = useState(valueToNumber(defaultValue));

  const setNumber = (value: Value) => {
    setState(valueToNumber(value));
  };

  return { value, setNumber };
}
