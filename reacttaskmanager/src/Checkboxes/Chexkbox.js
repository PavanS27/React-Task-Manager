import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkbox1() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        value="checkedC"
        inputProps={{
          "aria-label": "uncontrolled-checkbox"
        }}
        style={{ marginTop: 50, marginLeft: 10 }}
      />
    </div>
  );
}
