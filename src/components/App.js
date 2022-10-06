import React, { useState } from "react";
import { InputText, Modale, Button } from "../lib/index";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(evt) {
    console.log(evt.target.value);
  }
  function handleOpenModal() {
    setIsOpen(!isOpen);
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
      <Button type="button" onClick={handleOpenModal}>
        Open Modale
      </Button>
      <Modale message="Hello World !!!" open={() => handleOpenModal()} />
    </div>
  );
};

export default App;
