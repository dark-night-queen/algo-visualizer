import React, { PropsWithChildren } from "react";
import { Label } from "../../core";

export const Output: React.FC<PropsWithChildren> = ({ children }) => {
  return <Label name="Output">{children}</Label>;
};
