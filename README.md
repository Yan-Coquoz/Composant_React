# Type of React Component

Minimalist input-like components for React.

[french translation](README_fr.md)

## Prerequisites

- A text editor like `VSCode, Vim, IntelliJ...`
- [Node.js > v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Using the input module

This module works with React

### Input types

- `InputText`
- `InputNumber`
- `Select`
- `Button`
- `Modale`
- `DatePicker`

### Properties

**All properties with a * are required** :

`InputText`

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `label` : {String} `label` and `placeholder` content
- `isRequired` : {Boolean} Whether the value is required or not
- `myClass` *: {String} component class name
- `toUpperCase` : {Boolean} if you need to upper case label

---

`InputNumber`

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `label` : {String} `label` and `placeholder` content
- `isRequired` : {Boolean} Whether the value is required or not
- `myClass` *: {String} component class name
- `mini` : {Number} minimum value
- `maxi` : {Number} maximum value
- `toUpperCase` : {Boolean} if you need to upper case label

---

`Select`

- `tabs` *: {Array of Object || Array} for the `option` tag, if it 's an Array of Object, it must contain a propertie `name` who will be display
- `name` *: {String} instead of `label`
- `isRequired` : {Boolean} Whether the value is required or not.
- `idName` : {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.

---

`Button` :

- `type` *: {String} The type of button : button, submit, reset...
- `children` *: {String} The content, like : 'validate', 'save' ...
- `myClass` : {String} A class to give some style
- `idName` : {String} Id of the button
- `onClick` : {Function} If you need a function..

---

`Modale` :

- `message` *: {String} The message you need to display
- `open` *: {Boolean} the order to open the modal
- `sendStyle` : {String} Send color to the border of close button and text.
- `onClose` *: {Function} the order to close the modal

---

`DatePicker`:

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` of the input.
- `label` : {String} `label` and input `name`
- `myClass` : {String} input `className`
- `isRequired` : {Boolean} Whether the value is required or not.
- `toUpperCase` : {Boolean} if you need to upper case label

Example :

```javascript
import React, {useState} from "react"
import { InputText, Button, Modale, DatePicker } from "@yan_coquoz/react_input"


const MyForm = () => {

    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
  }
    return(
        <div>
            <form>
                <InputText 
                    idName={String} 
                    label={String} 
                    isRequired={Boolean} 
                    sendValue={Function} 
                    myClass={String} 
                />

                <DatePicker
                    idName={"dateOfBirth"}
                    isRequired={false}
                    label={"date of birth"}
                    toUpperCase={true}
                />
                <Button type="submit">Save</Button>

            </form>
            <Button type="button" onClick={handleOpenModal}>
                Open Modale
            </Button>
            <Modale message="Hello World !!!" open={()=>setIsOpen(!isOpen)} sendStyle={"#F0F"} />
        </div>
    )
}
```
