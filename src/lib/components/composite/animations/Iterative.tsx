import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { Label, Paper } from "../../core";

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

      <Label name="Current Item" sx={{ ml: -2, mt: 2 }}>
        <Typography variant="button" ml={2}>
          {String(inputArray[activeIndex])}
        </Typography>
      </Label>
    </>
  );
};
