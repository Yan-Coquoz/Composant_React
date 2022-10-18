# Type de Composant React

Composants minimaliste de type input pour React.

## Prérequis

- Un éditeur de texte comme `VSCode, Vim, IntelliJ...`
- [Node.js > v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Utilisation du module d'input

Ce module fonctionne avec React

### Les type d'input

- `InputText`
- `InputNumber`
- `Select`

### Propriétés

**Toutes les propriétés avec un * sont obligatoires** :

`InputText` :

- `idName` * : {String} Correspond aux propriétés `htmlFor` et `className` du label, ainsi qu'à l'`id` et au `name` de l'input.
- `label` : {String} contenu `label` et `placeholder`
- `isRequired` : {Booléen} Indique si la valeur est requise ou non
- `myClass` * : nom de la classe du composant {String}
- `toUpperCase` {Boolean} change la première lettre de chaque mot du label

---

`InputNumber` :

- `idName` * : {String} Correspond aux propriétés `htmlFor` et `className` du label, ainsi qu'à l'`id` et au `name` de l'input.
- `label` : {String} contenu `label` et `placeholder`
- `isRequired` : {Booléen} Indique si la valeur est requise ou non
- `myClass` * : nom de la classe du composant {String}
- `toUpperCase` {Boolean} change la première lettre de chaque mot du label
- `mini` {Number} valeur minimum de l'input
- `maxi` {Number} valeur maximum de l'input

---

`Select` :

- `tabs` * : {Table des objets} pour la balise `option`, doit contenir une propriété `name` qui sera affichée
- `name` * : {String} au lieu de `label`
- `isRequired` : {Booléen} Indique si la valeur est requise ou non.
- `idName` : {String} Correspond aux propriétés `htmlFor` et `className` de l'étiquette, ainsi qu'à l'`id` et au `name` de l'entrée.

---

`Boutons` :

- `type` * : {String} Le type de bouton : button, submit, reset...
- `children` * : {String} Le contenu, comme : 'validate', 'save' ...
- `myClass` : {String} Une classe pour donner du style
- `idName` : {chaîne} ID de bouton
- `onClick` : {Fonction} Au besoin d'une fonction..

---

`Modale` :

- `message` * : {String} Le message que vous devez afficher
- `open` * : {Function} l'ordre d'ouverture du modal
- `sendStyle` * : {String} customisation des bordures bouton et texte

---

`DatePicker` :

- `idName` *: {String} Correspond aux propriétés `htmlFor` et `className` du label, ainsi qu'à l'`id` de l'input.
- `label` {String} `label` et `name` de l'input
- `myClass` {String} `className` de l'input
- `isRequired` {Boolean} si la valuer est requise
- `toUpperCase` {Boolean} change la première lettre de chaque mot du label

Exemple :

```javascript
import {useState} from "react"
import { InputText,Button } from "@yan_coquoz/react_input"


const MyForm = () => {

    const [isOpen, setIsOpen] = useState(false);

   
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
            <Button type="button" onClick={()=>setIsOpen(!isOpen)}>
                Open Modale
            </Button>
            <Modale message="Hello World !!!" open={()=>setIsOpen(!isOpen)} sendStyle={"red"} />
        </div>
    )
}
```
