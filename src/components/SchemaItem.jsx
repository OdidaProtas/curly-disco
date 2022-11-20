import { Stack, Container, TextField, Button, Divider } from "@mui/material";

import Field from "./Field";

import { useStateValue } from "./Provider";

import * as React from "react";

export default function SchemaItem({ index }) {
  const { models } = useStateValue();
  const md = models[index];
  const [age, setAge] = React.useState("");

  const { fields = [] } = md;

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6>
          Model: {index + 1} {md.name}
        </h6>
        <div>
          <button>Delete model {md.name}</button>
        </div>
      </div>
      <Stack sx={{ my: 2 }} spacing={2}>
        <TextField label="Name" value={md.name} />
        <h5>Fields: </h5>
        {fields.map((f, idx) => {
          return <Field modelIndex={index} fieldIndex={idx} key={idx} />;
        })}
        <Divider />
        <Button disableElevation variant="contained">
          Add Field
        </Button>
        <Button disableElevation color="error" variant="contained">
          Delete Model
        </Button>
      </Stack>
    </Container>
  );
}
