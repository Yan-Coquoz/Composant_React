import React, { useState } from "react";
import {
  InputText,
  Modale,
  Button,
  DatePicker,
  InputNumber,
} from "../lib/index";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // function handleChange(evt) {
  //   console.log(evt.target.value);
  // }

  function handleSendForm(evt) {
    evt.preventDefault();
    const datas = [];
    const props = [];
    const values = [];

    if (props.length === values.length) {
      for (let i = 0; i < evt.target.length - 3; i++) {
        // -3 target renvoi un tableau des elements du form dont le bouton(*2).
        props.push(evt.target[i].name);
        values.push(evt.target[i].value);
      }

      for (let i = 0; i < values.length; i++) {
        datas.push({ [props[i]]: values[i] });
      }
    }
    console.log(datas);
  }
  return (
    <form onSubmit={handleSendForm}>
      <InputText
        idName={"firstname"}
        label={"Prénom"}
        isRequired={false}
        // sendValue={handleChange}
        myClass={"input_text"}
      />
      <InputNumber
        idName="testnumber"
        label={"test de nombre"}
        toUpperCase={true}
        mini={9999}
        maxi={99999}
      />
      <DatePicker
        idName={"dateOfBirth"}
        isRequired={false}
        label={"date of birth"}
        toUpperCase={true}
      />

      <Button type="button" onClick={() => setIsOpen(!isOpen)}>
        Open Modale
      </Button>

      <Modale message="Hello World !!!" open={() => setIsOpen(!isOpen)} />
      <br />
      <button>send</button>
    </form>
  );
};

export default App;
