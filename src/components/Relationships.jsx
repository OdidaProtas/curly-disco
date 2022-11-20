import { Box, Stack, Typography, Button } from "@mui/material";
import { useStateValue } from "./Provider";

export default function Relationships() {
  const { models, step } = useStateValue();
  return (
    <Stack spacing={3}>
      <Typography variant="h4">{step}. Object Relationships </Typography>
      {models.map((md, idx) => {
        return <Box>{md.name}</Box>;
      })}
      <Button disableElevation variant="contained" >ADD Relationship</Button>
    </Stack>
  );
}
