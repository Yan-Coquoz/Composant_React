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
    - [`Select`](#select)
    - [`Button`](#button)
    - [`Modale`](#modale)
    - [`DatePicker`](#datepicker)
    - [Example](#example)

### Components

- `InputText`
- `InputNumber`
- `Select`
- `Button`
- `Modale`
- `DatePicker`

### Properties

**All properties with a * are required** :

### `InputText`

- `idName` *: {String} Corresponds to the `htmlFor` and `className`.properties of the label, as well as the `id` and the `name` of the input.
- `label` : {String} `label` and `placeholder` content.
- `isRequired` : {Boolean} Whether the value is required or not.
- `myClass` *: {String} component class name.
- `toUpperCase` : {Boolean} if you need to upper case label.
- `sendValue` : To have a controlled component, allows to retrieve the values of the input: name and value, for each action on the keyboard.

---

[to summary](#summary)

---

### `InputNumber`

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `label` : {String} `label` and `placeholder` content
- `isRequired` : {Boolean} Whether the value is required or not
- `myClass` *: {String} component class name
- `mini` : {Number} minimum value
- `maxi` : {Number} maximum value
- `toUpperCase` : {Boolean} if you need to upper case label.
- `sendValue` : To have a controlled component, allows to retrieve the values of the input: *name* and *value*, for each action on the keyboard.

---

[to summary](#summary)

---

### `Select`

- `tabs` *: {Array of Object || Array} for the `option` tag, if it 's an Array of Object, it must contain a property `name` who will be display
- `name` *: {String} instead of `label`
- `isRequired` : {Boolean} Whether the value is required or not.
- `idName` : {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `sendValue` : {Function} return name and value.
- `toUpperCase` : {Boolean} if you need to upper case label

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
- `label` : {String} `label` and input `name`
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
                    label={first name} 
                    isRequired={true} 
                    sendValue={handleInputText} 
                    myClass={"input_firstname"} 
                    toUpperCase={true}
                />

                <DatePicker
                    idName={"dateOfBirth"}
                    isRequired={false}
                    label={"date of birth"}
                    toUpperCase={true}
                    lang={"en"}
                />
                
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
