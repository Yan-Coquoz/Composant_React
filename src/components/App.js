import React from "react";
import { InputText } from "../lib/index";

const App = () => {
  function handleChange(evt) {
    console.log(evt.target.value);
  }
  return (
    <div>
      <InputText
        idName={"firstname"}
        label={"Prénom"}
        isRequired={false}
        sendValue={handleChange}
        myClass={"input_text"}
      />
    </div>
  );
};

export default App;
