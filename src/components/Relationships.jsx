import { Box, Stack, Typography, Button } from "@mui/material";
import useActions from "../../pages/api/useActions";
import { useStateValue } from "./Provider";

import RelationshipItem from "./RelationshipItem";

export default function Relationships() {
  const { relationships, step } = useStateValue();

  const { handleAddRelationship } = useActions();
  return (
    <Stack spacing={3}>
      <Typography variant="h4">{step}. Object Relationships </Typography>
      {relationships.map((md, idx) => {
        return <RelationshipItem index={idx} key={idx} />;
      })}
      <Button
        onClick={handleAddRelationship}
        disableElevation
        variant="contained"
      >
        ADD Relationship
      </Button>
    </Stack>
  );
}
