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

### Properties

These properties (`InputText`, `InputNumber` ) are common to components.

**All properties with a * are required** :

- `idName` *: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- `label` : {String} `Label` and `placeholder` content
- `sendValue` *: {Function} Triggers an action
- `isRequired` : {Boolean} Whether the value is required or not
- `myClass` *: {String} component class name

---

`Select`

- `tabs` *: {Array of Object} for the `option` tag, must contain a propertie `name` who will be display
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
- `open` *: {Function} the order to open the modal
- `sendStyle` : {String} Send color to the border of close button and text

Example :

```javascript
import {useState} from "react"
import { InputText,Button } from "@yan_coquoz/react_input"


const MyForm = () => {

    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(!isOpen);
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
                <Button type="submit">Save</Button>
         
            </form>
            <Button type="button" onClick={handleOpenModal}>
                Open Modale
            </Button>
            <Modale message="Hello World !!!" open={()=>handleOpenModal()} sendStyle={"#F0F"} />
        </div>
    )
}
```
