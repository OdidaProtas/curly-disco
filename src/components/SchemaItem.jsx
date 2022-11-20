import {
  Stack,
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";

import { useStateValue } from "./Provider";

import * as React from "react";

export default function SchemaItem({ index }) {
  const { models } = useStateValue();
  const md = models[index];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <Stack sx={{ my: 2 }} spacing={2}>
        <TextField label="Name" value={md.name} />

        <h5>Fields: </h5>
        
      </Stack>
    </Container>
  );
}
