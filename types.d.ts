type Value = number | string;	
type ValueCallback = (value: Value) => void;	

type EventCallbacks = {	
  onChange?: ValueCallback;	
  onMouseUp?: ValueCallback;	
};