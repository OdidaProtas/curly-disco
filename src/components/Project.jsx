import { TextField, Stack, Typography } from "@mui/material";
import { useDispatch, useStateValue } from "./Provider";

export default function ProjectForm() {
  const { name, step } = useStateValue();
  const dispatch = useDispatch();
  const handleNameChange = (e) => {};
  return ( 
    <Stack sx={{ bgcolor: "lightblue", p: 2 , borderRadius:'4px'}} spacing={2}>
      <Typography variant="h4">{step}. Project information</Typography>
      <TextField fullWidth label="Project name" required value={name} />
      <TextField fullWidth label="Description" required value={name} />
      <TextField fullWidth label="Author" required value={name} />
      <TextField fullWidth label="Github username" required value={name} />
      <TextField fullWidth label="Repository name" required value={name} />
    </Stack>
  );
}
