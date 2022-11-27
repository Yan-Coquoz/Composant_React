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

  //test de tableaux avec optGroup
  const tab1 = ["red", "blue", "green"];
  const tab2 = ["short", "coat", "socket", "shoes"];
  const tab3 = ["moto", "car", "boat"];

  const mesTableaux = [
    { colors: [...tab1] },
    { clothes: [...tab2] },
    { vehicle: [...tab3] },
  ];
  const selectTest = {
    tabs: mesTableaux,
    idName: "tableau",
    labelName: "mes tableaux",
    sendValue: handleSelect,
    toUpperCase: true,
    group: true,
    optValue: true,
    isRequired: true,
  };

  const selectDep = {
    tabs: depts,
    idName: "department",
    labelName: "department",
    optValue: false,
    isRequired: false,
    sendValue: handleSelect,
    toUpperCase: true,
  };

  const selectState = {
    tabs: etats,
    idName: "state",
    labelName: "state",
    toUpperCase: true,
    optValue: true,
    isRequired: false,
    sendValue: handleSelect,
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleChangeInput(name, value) {
    console.log(name, value);
  }

  function handleSelect(v1, v2) {
    console.log("Dans handleSelect :", v1, v2);
  }
  function handleSendForm(evt) {
    evt.preventDefault();
    const selectDepart = evt.target[2].value;

    // DATAFORM
    const form = evt.target;
    console.log(form);
    const dataForm = new FormData(form);
    const dateFORM = dataForm.get("dateOfBirth");
    console.log("dateForm => ", dateFORM);

    form.reset();

    // fin DataForm

    const datas = [];
    const propris = [];
    const values = [];
    if (propris.length === values.length) {
      for (let i = 0; i < evt.target.length - 3; i++) {
        // -3 target renvoi un tableau des elements du form dont le bouton(*2).
        propris.push(evt.target[i].name);
        values.push(evt.target[i].value);
      }

      for (let i = 0; i < values.length; i++) {
        datas.push({ [propris[i]]: values[i] });
      }
    }

    if (selectDep.isRequired) {
      if (selectDepart.toLowerCase() !== "options") {
        console.log("xxx ", selectDepart);
      } else {
        console.warn("Select a value");
      }
    }
  }

  return (
    <div>
      <h1>Hello Test</h1>
      <form onSubmit={handleSendForm}>
        <fieldset>
          <legend>Select</legend>
          <SelectField {...selectTest} />
          <SelectField {...selectDep} />
          <SelectField {...selectState} />
        </fieldset>
        <br />
        <fieldset>
          <legend>Input</legend>
          <InputText
            idName={"firstname"}
            labelName={"prénom"}
            isRequired={false}
            sendValue={handleChangeInput}
            myClass={"input_text"}
            toUpperCase={true}
          />

          <InputNumber
            idName="testnumber"
            labelName={"test de nombre"}
            toUpperCase={true}
            // mini={10000}
            // maxi={99999}
            isRequired={false}
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Date</legend>
          <DatePicker
            idName={"dateOfBirth"}
            isRequired={true}
            labelName={"date of birth"}
            toUpperCase={true}
            lang={"en"}
            placeholder={"date"}
          />
        </fieldset>

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
