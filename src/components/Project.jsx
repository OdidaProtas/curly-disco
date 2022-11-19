import { TextField } from "@mui/material";
import { useDispatch, useStateValue } from "./Provider";

export default function ProjectForm() {
  const { name } = useStateValue();
  const dispatch = useDispatch();
  const handleNameChange = (e) => {};
  return (
    <>
      <TextField fullWidth label="Project name" value={name} />
    </>
  );
}
