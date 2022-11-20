import {
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";

import React from "react";

export default function RelationshipItem({ index }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack sx={{ bgcolor: "lightblue", p: 3, borderRadius: "4px" }} spacing={2}>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">Relationship type</InputLabel>
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
      <Box>
        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Relationship type
              </InputLabel>
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
          </Grid>
          <Grid item xs>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Relationship type
              </InputLabel>
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
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
