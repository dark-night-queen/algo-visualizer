"use client";

import * as React from "react";
import { Paper as MuiPaper, PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(MuiPaper)<PaperProps>(({ theme }) => {
  const _color = theme.palette.common.black;

  return {
    color: theme.palette.getContrastText(_color),
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.getContrastText(_color)}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: _color,
  };
});

export const Paper = (props: PaperProps) => {
  return <StyledPaper {...props} />;
};
