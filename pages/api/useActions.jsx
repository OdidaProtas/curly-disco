import { useDispatch, useStateValue } from "../../src/components/Provider";

export default function useActions() {
  const dispatch = useDispatch();
  const { maxStep } = useStateValue();

  return {
    handleProjectChange(e) {
      const type = "handle_project_change";
      const { name, value } = e.target;
      dispatch({
        type,
        name,
        value,
      });
    },
    handleStepChange(step) {
      const type = "step";
      const payload = step === 0 ? 1 : step > maxStep ? maxStep : step;
      dispatch({
        type,
        payload,
      });
    },
    handleReset() {
      const type = "reset";
      dispatch({
        type: "reset",
      });
    },
    handleAddModel() {
      const type = "add_model";
      const payload = {
        name: "",
        fields: [
          {
            name: "", 
          },
        ],
      };
      dispatch({
        type,
        payload,
      });
    },
  };
}
