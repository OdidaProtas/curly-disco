import {
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Divider,
  Typography,
  Button,
} from "@mui/material";

import React from "react";
import useActions from "../../pages/api/useActions";

export default function Field({ modelIndex, fieldIndex }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { handleRemoveField } = useActions();

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h6">Field {fieldIndex + 1}</Typography>
        </div>
        <div>
          <Button onClick={() => handleRemoveField(modelIndex, fieldIndex)}>
            Delete field
          </Button>
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
        <Divider />
      </Stack>
    </Container>
  );
}
