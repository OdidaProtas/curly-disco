import {
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";

import React from "react";

export default function Field({ modelIndex, fieldIndex }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6>
          <h5>Field {fieldIndex + 1}</h5>
        </h6>
        <div>
          <button>Delete field</button>
        </div>
      </div>
      <Stack spacing={2}>
        <TextField size="small" label="Field name" />
        <FormControl size="small" fullWidth>
          <InputLabel id="demo-simple-select-label">Field type</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Field type"
            onChange={handleChange}
          >
            <MenuItem value={10}>String</MenuItem>
            <MenuItem value={20}>Number</MenuItem>
            <MenuItem value={30}>array</MenuItem>
          </Select>
        </FormControl>
        <TextField size="small" label="Example" />
      </Stack>
    </Container>
  );
}
