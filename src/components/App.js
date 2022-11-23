import React, { useState } from "react";
import {
  // InputText,
  Modale,
  Button,
  // DatePicker,
  // InputNumber,
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

  const selectDep = {
    tabs: depts,
    idName: "department",
    labelName: "department",
    optValue: false,
    sendValue: handleSelect,
    toUpperCase: true,
    isRequired: true,
  };
  const selectState = {
    tabs: etats,
    idName: "state",
    labelName: (Math.random() * 1).toFixed(1) > 0.5 ? "state *" : "state",
    toUpperCase: true,
    optValue: true,
    sendValue: handleSelect,
    isRequired: true,
  };

  const selectTest = {
    tabs: mesTableaux,
    idName: "tableau",
    labelName: "mes tableaux",
    optValue: true,
    sendValue: handleSelect,
    toUpperCase: true,
    isRequired: true,
    group: true,
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
    const dataForm = new FormData(form);
    const dateFORM = dataForm.get("dateOfBirth");
    console.log("dateForm ", dateFORM);

    form.reset();
    // fin DataForm

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

    if (selectDep.isRequired) {
      if (selectDepart.toLowerCase() !== "options") {
        console.log(selectDepart);
      } else {
        console.warn("Select a value");
      }
    }
  }

  return (
    <div>
      <h1>Hello Test</h1>
      <form onSubmit={handleSendForm}>
        <SelectField {...selectTest} />

        {/* <InputText
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
        /> */}

        <SelectField {...selectDep} />
        {/* 
        <DatePicker
          idName={"dateOfBirth"}
          isRequired={false}
          labelName={"date of birth"}
          toUpperCase={true}
          lang={"en"}
          placeholder={"date"}
        /> */}

        <SelectField {...selectState} />

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
