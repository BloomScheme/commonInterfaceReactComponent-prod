import { useState } from "react";

export default function useTextState(defaultValue?: Value) {
  const [value, setState] = useState(defaultValue?.toString() || "");

  const setText = (value: Value) => {
    setState(value.toString());
  };

  return { value, setText };
}
