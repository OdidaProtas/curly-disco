import { useDispatch, useStateValue } from "../../src/components/Provider";

export default function useActions() {
  const dispatch = useDispatch();
  const { maxStep, models } = useStateValue();

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
    handleRemoveModel(idx) {
      const type = "mutate_models";
      let payload = [...models];
      payload.splice(idx, 1);
      if (!payload.length) {
        payload = [
          {
            name: "",
            fields: [
              {
                name: "",
              },
            ],
          },
        ];
      }
      dispatch({
        type,
        payload,
      });
    },
    handleAdddField(model) {
      const type = "mutate_models";
      let payload = [...models];
      const field = { name: "" };
      payload[model] = {
        ...payload[model],
        fields: [...payload[model].fields, field],
      };
      dispatch({
        type,
        payload,
      });
    },
    handleRemoveField(model, field) {
      const type = "mutate_models";
      let payload = [...models];
      let allFields = [...payload[model].fields];
      allFields.splice(field, 1);
      if (!Boolean(allFields.length)) {
        allFields = [
          {
            name: "",
          },
        ];
      }
      payload[model] = {
        ...payload[model],
        fields: [...allFields],
      };
      dispatch({
        type,
        payload,
      });
    },
    handleAddRelationship(){
      const type = "add_relationship";
      const payload = {
        name: "",
        fields: [
          {
            type: "",
          },
        ],
      };
      dispatch({
        type,
        payload,
      });
    }
  };
}
