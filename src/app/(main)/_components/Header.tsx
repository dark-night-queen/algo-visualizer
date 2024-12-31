import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@/lib/components";

export const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h6">Algorithm Visualizer</Typography>

      <Button variant="contained" color="primary">
        Visualize
      </Button>
    </Box>
  );
};
