import { Stack, Typography } from "@mui/material";
import { Iterative } from "./_algorithms/Iterative";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h2">Welcome to Algorithm Visualizer</Typography>
      <Iterative />
    </Stack>
  );
}
