import React, { PropsWithChildren } from "react";
import { Header } from "./_components/Header";
import { Stack } from "@mui/material";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack gap={4} p={6}>
      <Header />
      {children}
    </Stack>
  );
};

export default layout;
