import React from "react";
import { Label } from "../../core";
import { Typography } from "@mui/material";

interface AlgorithmsProps {
  name: string;
}

export const Algorithm: React.FC<AlgorithmsProps> = ({ name }) => {
  return (
    <Label name="Algorithm">
      <Typography variant="button">{name}</Typography>
    </Label>
  );
};
