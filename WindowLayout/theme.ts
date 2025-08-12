export const theme = {
  BACKGROUND_COLOR_MAIN: "#2b388d",
  BACKGROUND_COLOR_MAIN_NOT_ACTIVE: "#7880B6",
  BACKGROUND_COLOR_SELECTED: "#f0faff",
  BACKGROUND_COLOR_HOVER: "#fafbff",
  TEXT_COLOR_ON_BACKGROUND: "#f6f6f6",
};

export const setTheme = (data: Partial<typeof theme>) => {
  Object.keys(data).forEach((key) => {
    (theme as any)[key] = (data as any)[key];
  });
};
