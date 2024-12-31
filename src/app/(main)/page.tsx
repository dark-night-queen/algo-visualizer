"use client";

import { Stack, useTheme } from "@mui/material";
import { Paper } from "@/lib/components";
import { useEffect, useState } from "react";

export default function Home() {
  const inputSize = 5;
  const theme = useTheme();

  const [currSelectedPaper, setCurrSelectedPaper] = useState(0);

  useEffect(() => {
    const changeBackgroundAsync = async () => {
      await changeBackground();
    };
    changeBackgroundAsync();
  }, []);

  const changeBackground = async () => {
    let i = 0;

    while (i < inputSize) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      setCurrSelectedPaper(i);
      i++;

      // Reset the index to 0 if it reaches the end
      if (i == inputSize) i = 0;
    }
  };

  return (
    <Stack direction={"row"} spacing={2}>
      {Array.from({ length: inputSize }, (_, i) => (
        <Paper
          sx={
            currSelectedPaper == i
              ? {
                  color: theme.palette.success.light,
                  borderColor: theme.palette.success.light,
                }
              : {}
          }
          key={i}
        >
          {i}
        </Paper>
      ))}
    </Stack>
  );
}
