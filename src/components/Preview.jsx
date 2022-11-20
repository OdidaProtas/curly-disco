import { Box, Stack, Typography, Grid } from "@mui/material";
import { useStateValue } from "./Provider";

export default function Schema() {
  const { models, step } = useStateValue();
  return (
    <Stack spacing={3}>
      <Typography variant="h4">{step}. Preview </Typography>
      <Box>
        <Grid container spacing={2}>
          {models.map((md, idx) => {
            return (
              <Grid
                sx={{ p: 2, bgcolor: "lightblue", borderRadius: "4px", border:'1px solid cyan' }}
                item
                xs={3}
              >
                <Typography>
                  Model {idx + 1} {md.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
}
