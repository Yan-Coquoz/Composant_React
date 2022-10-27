import React, { useState } from "react";
import {
  InputText,
  Modale,
  Button,
  DatePicker,
  InputNumber,
  Select,
} from "../lib/index";
import { depts, etats } from "../Datas";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

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

      <Select tabs={depts} idName={"department"} name={"department"} />

      <DatePicker
        idName={"dateOfBirth"}
        isRequired={false}
        label={"date of birth"}
        toUpperCase={true}
      />
      <Select tabs={etats} idName={"state"} name={"state"} toUpperCase={true} />

      <Button type="button" onClick={handleOpenModal}>
        Open Modale
      </Button>

      <Modale
        message="Hello World !!!"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      />
      <br />
      <button>send</button>
    </form>
  );
};

export default App;
