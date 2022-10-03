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

### Properties

These properties are common to components:

- idName: {String} Corresponds to the `htmlFor` and `className` properties of the label, as well as the `id` and the `name` of the input.
- label: {String} `Label` and `placeholder` content
- sendValue: {Function} Triggers an action
- isRequired: {Boolean} Whether the value is required or not
- myClass: {String} component class name

The `Select` component additionally takes the property
  `tabs`: {Array of Object} for the `option` tag

Example :

```javascript
import { InputText } from "my_react_redux_inputs"


const MyForm = () => {

    return(
        <form>
            <InputText 
                idName={String} 
                label={String} 
                isRequired={Boolean} 
                sendValue={Function} 
                myClass={String} 
                />
        </form>
    )
}
