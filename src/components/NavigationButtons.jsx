import { Button, Paper, Typography, Grid } from "@mui/material";
import useActions from "../../pages/api/useActions";
import { useStateValue } from "./Provider";

export default function NavigationButtons() {
  const { step } = useStateValue();
  const { handleStepChange } = useActions();
  const maxStep = 4; // To refactor
  return (
    <Paper sx={{ bgcolor: "lightblue", p: 3, mt: 5 }}>
      <Typography sx={{ mb: 4 }} variant="h6">
        Step {step}
      </Typography>
      <Typography>
        This information is required to fill repository and package details
      </Typography>
      <Button
        startIcon={<>{"<"}</>}
        sx={{ mt: 3 }}
        onClick={(e) => handleStepChange(step - 1)}
        disabled={step === 1}
        size="large"
        variant="contained"
        disableElevation
        fullWidth
      >
        Previous
      </Button>
      <Button
        endIcon={<>{">"}</>}
        onClick={(e) => handleStepChange(step + 1)}
        disabled={step === maxStep}
        size="large"
        sx={{ my: 3 }}
        fullWidth
        disableElevation
        variant="contained"
      >
        Next
      </Button>
      <Button
        disabled={maxStep !== step}
        fullWidth
        size="large"
        disableElevation
        variant="contained"
      >
        Generate Project
      </Button>
    </Paper>
  );
}
