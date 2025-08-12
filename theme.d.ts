type ColorSet = {
  color: string;
  background: string;
};

type ColorParts = {
  normal: ColorSet;
  active: ColorSet;
};

type ButtonTheme = {
  common: ColorParts;
  aggressive: ColorParts;
  danger: ColorParts;
  disabled: ColorParts;
};
