import { useStateValue } from "./Provider";
import ProjectForm from "./Project";
import Relationships from "./Relationships";
import Schema from "./Schema";
import Preview from "./Preview";

import { Stack } from "@mui/material";
export default function () {
  const { step } = useStateValue();
  return (
      <Stack spacing={3}>
        {step === 1 && <ProjectForm />}
        {step === 2 && <Schema />}
        {step === 3 && <Relationships />}
        {step === 4 && <Preview />}
      </Stack>
  );
}
