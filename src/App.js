import React from "react";
import { InputText, InputNumber, Select } from "./lib/";
import { etats, depts } from "./Datas";
import InputDate from "./InputDate";

import "./App.css";

function App() {
  function handleSelectValue(name, value) {
    console.log(name, value);
  }
  function getValue(nom, value) {
    console.log("mes valeurs ", nom, value);
  }
  function handleSendForm(evt) {
    evt.preventDefault();
    // check des valeurs du form si ok on envoi sinon msg err
    console.log("Envoi du form");
  }

  return (
    <div className="App">
      <form onSubmit={handleSendForm}>
        <InputText
          idName="prenom"
          label="first name"
          sendValue={getValue}
          isRequired={true}
          myClass={"mon_prenom"}
        />
        <InputText
          idName="nom"
          label="last name"
          sendValue={getValue}
          isRequired={true}
          myClass={"mon_nom"}
        />
        <InputDate idName={"birth"} label={"date of birth"} />
        <InputDate idName={"date"} label={"start date"} />

        <fieldset>
          <legend style={{ textAlign: "left" }}>Address</legend>
          <InputText
            idName="street"
            label="street"
            sendValue={getValue}
            isRequired={true}
            myClass={"street"}
          />
          <InputText
            idName="city"
            label="city"
            sendValue={getValue}
            isRequired={true}
            myClass={"city"}
          />
          <Select
            tabs={etats}
            name={"etats"}
            idLabel={"states"}
            isRequired={true}
            sendValue={handleSelectValue}
          />
          <InputNumber
            idName="zipcode"
            label="zip code"
            sendValue={getValue}
            isRequired={true}
            myClass={"zip_code"}
          />
        </fieldset>
        <Select
          tabs={depts}
          name={"department"}
          idLabel={"department"}
          isRequired={false}
          sendValue={handleSelectValue}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
