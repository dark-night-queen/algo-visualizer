import React, { PropsWithChildren } from "react";
import { Label } from "../../core";

export const Input: React.FC<PropsWithChildren> = ({ children }) => {
  return <Label name="Input">{children}</Label>;
};
