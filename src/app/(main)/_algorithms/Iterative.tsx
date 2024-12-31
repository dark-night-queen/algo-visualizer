"use client";

import React, { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import {
  Algorithm,
  Input,
  Iterative as IterativeAnimation,
  Output,
} from "@/lib/components/composite";
import { Label } from "@/lib/components";

interface IterativeProps<T> {
  n?: number;
  array?: T[];
}

export const Iterative = <T extends number | string>({
  n,
  array,
}: IterativeProps<T>) => {
  const inputSize = n || array?.length || 5;
  const inputArray = array || Array.from({ length: inputSize }, (_, i) => i);

  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveIndex = (index: number) => setActiveIndex(index);
  const resetActiveIndex = () => setActiveIndex(0);

  useEffect(() => {
    const loopActiveIndex = async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));

      if (activeIndex < inputSize - 1) updateActiveIndex(activeIndex + 1);
      else resetActiveIndex();
    };

    loopActiveIndex();
  }, [activeIndex]);

  return (
    <>
      <Algorithm name="Iterative" />
      <Input>
        <Typography variant="button">{`[${inputArray.toString()}]`}</Typography>
      </Input>

      <Output>
        <IterativeAnimation
          array={inputArray as T[]}
          activeIndex={activeIndex}
        />
      </Output>

      <Label name="Current Item">
        <Typography variant="button">
          {String(inputArray[activeIndex])}
        </Typography>
      </Label>
    </>
  );
};
