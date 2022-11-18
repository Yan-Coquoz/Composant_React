import React, { useState } from "react";
import {
  InputText,
  Modale,
  Button,
  DatePicker,
  InputNumber,
  SelectField,
} from "../lib/index";
import { depts, etats } from "../Datas";
import "./style.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleChangeInput(name, value) {
    console.log(name, value);
  }
  function handleSelect(name, value) {
    console.log(name, value);
  }

  function handleSendForm(evt) {
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
  }

  return (
    <div>
      <h1>Hello Test</h1>
      <form onSubmit={handleSendForm}>
        <InputText
          idName={"firstname"}
          label={"prénom"}
          isRequired={false}
          sendValue={handleChangeInput}
          myClass={"input_text"}
          toUpperCase={true}
        />
        <InputNumber
          idName="testnumber"
          label={"test de nombre"}
          toUpperCase={true}
          // mini={10000}
          // maxi={99999}
          isRequired={false}
        />

        <SelectField
          tabs={depts}
          idName={"department"}
          labelName={"departements"}
          optValue={true}
          sendValue={handleSelect}
        />

        <DatePicker
          idName={"dateOfBirth"}
          isRequired={false}
          label={"date of birth"}
          toUpperCase={true}
          lang={"fr"}
          placeholder={"date"}
        />
        <SelectField
          tabs={etats}
          idName={"state"}
          labelName={(Math.random() * 1).toFixed(1) > 0.5 ? "state *" : "state"}
          toUpperCase={true}
          optValue={true}
          sendValue={handleSelect}
          isRequired={true}
        />

        <br />
        <button type="submit">send</button>
      </form>

      <Button type="button" onClick={handleOpenModal}>
        Open Modale
      </Button>
      <br />
      <Modale
        message="Hello World !!!"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default App;
