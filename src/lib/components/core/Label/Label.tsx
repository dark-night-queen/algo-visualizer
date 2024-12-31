import React, { PropsWithChildren } from "react";
import { Box, Stack, SxProps, Typography } from "@mui/material";

interface LabelProps extends PropsWithChildren {
  name: string;
  sx?: SxProps;
}

export const Label: React.FC<LabelProps> = ({ name, children, sx = {} }) => {
  return (
    <Stack sx={sx}>
      <Typography variant="overline">{name}:</Typography>
      <Box ml={2}>{children}</Box>
    </Stack>
  );
};
