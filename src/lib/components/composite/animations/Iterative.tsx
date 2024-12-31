import React from "react";
import { Stack, useTheme } from "@mui/material";
import { Paper } from "../../core";

interface IterativeProps<T> {
  array: T[];
  activeIndex: number;
}

export const Iterative = <T extends number | string>({
  array: inputArray,
  activeIndex,
}: IterativeProps<T>) => {
  const theme = useTheme();
  const activeItemStyle = {
    color: theme.palette.success.light,
    borderColor: theme.palette.success.light,
  };

  return (
    <>
      <Stack direction={"row"} spacing={2}>
        {inputArray.map((item, index) => (
          <Paper sx={index === activeIndex ? activeItemStyle : {}} key={index}>
            {String(item)}
          </Paper>
        ))}
      </Stack>
    </>
  );
};
