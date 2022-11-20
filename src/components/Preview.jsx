import { Box, Stack, Typography, Button } from "@mui/material";
import { useStateValue } from "./Provider";

export default function Schema() {
  const { models, step } = useStateValue();
  return (
    <Stack spacing={3}>
      <Typography variant="h4">{step}. Preview </Typography>
      {models.map((md, idx) => {
        return <Box>{md.name}</Box>;
      })}
    </Stack>
  );
}
