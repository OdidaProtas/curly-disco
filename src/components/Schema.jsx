import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import useActions from "../../pages/api/useActions";
import { useStateValue } from "./Provider";

import SchemaItem from "./SchemaItem";

export default function Schema() {
  const { models, step } = useStateValue();
  const { handleAddModel } = useActions();
  return (
    <Box>
      <Stack spacing={3}>
        <Typography variant="h4">{step}. Schemas </Typography>
        <Box>
      <Grid container spacing={2} >
      {models.map((md, idx) => {
          return (
            <Grid item xs={6} sx={{ bgcolor: "lightblue", border:'1px solid cyan',p:2 , borderRadius:'4px' }} key={idx}>
              <SchemaItem index={idx} />
            </Grid>
          );
        })}
      </Grid>
        
        </Box>
        <Button onClick={handleAddModel} disableElevation variant="contained">
          ADD model
        </Button>
      </Stack>
    </Box>
  );
}
