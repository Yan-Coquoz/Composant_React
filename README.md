# React Component

- ![Author](<https://img.shields.io/badge/Author-Yan Coquoz-">)
- ![GitHub P14_HRnet_React size](<https://img.shields.io/github/repo-size/Yan-Coquoz/Composant_React>)
![GitHub top language](https://img.shields.io/github/languages/top/Yan-Coquoz/Composant_React)
![GitHub language count](https://img.shields.io/github/languages/count/Yan-Coquoz/Composant_React)

Minimalist input-like components for React.

[french translation](README_fr.md)

## Prerequisites

- A text editor like `VSCode, Vim, IntelliJ...`
- [Node.js > v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Using the input module

This module works with React

### Summary

- [React Component](#react-component)
  - [Prerequisites](#prerequisites)
  - [Using the input module](#using-the-input-module)
    - [Summary](#summary)
    - [Components](#components)
    - [Properties](#properties)
    - [`InputText`](#inputtext)
    - [`InputNumber`](#inputnumber)
    - [`SelectField`](#selectfield)
    - [`Button`](#button)
    - [`Modale`](#modale)
    - [`DatePicker`](#datepicker)
    - [Example](#example)

### Components

- `InputText`
- `InputNumber`
- `SelectField`
- `Button`
- `Modale`
- `DatePicker`

### Properties

**All properties with a * are required** :

### `InputText`

- `idName` *: {String} Corresponds to the `htmlFor` and `className`.properties of the label, as well as the `id` and the `name` of the input.
- `labelName` : {String} `label` value and `placeholder` content.
- `isRequired` : {Boolean} Whether the value is required or not.
- `myClass` : {String} component class name.
- `toUpperCase` : {Boolean} if you need to upper case label.
- `onChange` : {Function} To have a controlled component, allows to retrieve the values of the input: name and value, for each action on the keyboard.
- `value`: {String} the value found in the field.
- `placeholder`: {String} the placeholder.

---

[to summary](#summary)

---

### `InputNumber`

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `labelName` : {String} `label` and `placeholder` content
- `isRequired` : {Boolean} Whether the value is required or not
- `myClass` *: {String} component class name
- `mini` : {Number} minimum value
- `maxi` : {Number} maximum value
- `toUpperCase` : {Boolean} if you need to upper case label.
- `onChange` : {Function} To have a controlled component, allows to retrieve the values of the input: *name* and *value*, for each action on the keyboard.
- `value`: {String} the value found in the field.
- `placeholder`: {String} the placeholder.

---

[to summary](#summary)

---

### `SelectField`

- `options` *: {Array of Object || Array} for the `option` tag, if it 's an Array of Object, it must contain a property `name` who will be display
- `labelName` : {String} instead of `label`
- `isRequired` : {Boolean} Whether the value is required or not.
- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `onChange` : {Function} return name and value.
- `toUpperCase` : {Boolean} if you need to upper case label
- `optValue` : {Boolean} Render 'Options' for first value in select area. If true, the first value will be **options**, but if `isRequired` is true, the value will be empty.
- `group` : {Boolean} false by default. If true, `tabs` must look like this : [{car:[...arrayOfCars],bike:[...arrayOfBikes]}], then optgroup label will be `car` and `bike`.
- `onClick` : {Function} Capture the click of the field.
- `onBlur` : {Function} Capture the change of the field.
- `value` : {String} the value found in the field.

---

[to summary](#summary)

---

### `Button`

- `type` *: {String} The type of button : button, submit, reset...
- `children` *: {String} The content, like : 'validate', 'save' ...
- `myClass` : {String} A class to give some style
- `idName` : {String} Id of the button
- `onClick` : {Function} If you need a function.. (onClick)

---

[to summary](#summary)

---

### `Modale`

- `message` *: {String} The message you need to display
- `open` *: {Boolean} the order to open the modal
- `sendStyle` : {String} Send color to the border of close button and text.
- `onClose` *: {Function} the order to close the modal

---

[to summary](#summary)

---

### `DatePicker`

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` of the input.
- `labelName` : {String} `label` value.
- `myClass` : {String} input `className`
- `isRequired` : {Boolean} Whether the value is required or not.
- `toUpperCase` : {Boolean} if you need to upper case label
- `lang` : {String} to format date. by default "en" : yyyy-MM-dd. Can be french with "fr" : dd-MM-yyyy
- `placeholder` : {String} What is expected in the field.

---

[to summary](#summary)

---

### Example

```javascript
import React, {useState} from "react"
import { InputText, Button, Modale, DatePicker } from "@yan_coquoz/react_input"

const MyForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tab1 = ["red", "blue", "green"];
  const tab2 = ["short", "coat", "socket"];
  const tab3 = ["moto", "car", "boat"];

  const arrays = [
    { colors: [...tab1] },
    { clothes: [...tab2] },
    { vehicle: [...tab3] },
  ];

  const selectTabs = {
    options: arrays,
    idName: "arrays",
    labelName: "all tables",
    optValue: true,
    toUpperCase: true,
    isRequired: true,
    group: true,
  };

    function handleOpenModal() {
        setIsOpen(true);
  }

  function handleInputText(name, value){
    console.log(name, value)
    // do what you want
 }
    return(
        <div>
            <form>
                <InputText 
                    idName={firstname} 
                    labelName={first name} 
                    isRequired={true} 
                    sendValue={handleInputText} 
                    myClass={"input_firstname"} 
                    toUpperCase={true}
                />

                <DatePicker
                    idName={"dateOfBirth"}
                    isRequired={false}
                    labelName={"date of birth"}
                    toUpperCase={true}
                    lang={"en"}
                />
                
                <SelectField {...selectTabs}>

                <Button type="submit">Save</Button>

            </form>
            <div>
                <Button type="button" onClick={handleOpenModal}>
                    Open Modale
                </Button>
                <Modale message="Hello World !!!" open={isOpen} sendStyle={"#F0F"} onClose={()=> setIsOpen(!isOpen)} />
            </div>
        </div>
    )
}
```

---

[to summary](#summary)

---
