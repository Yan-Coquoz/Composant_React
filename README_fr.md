# Composant React

Composants minimaliste de type input pour React.

## Prérequis

- Un éditeur de texte comme `VSCode, Vim, IntelliJ...`
- [Node.js > v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)


---

### Sommaire

- [Composant React](#composant-react)
  - [Prérequis](#prérequis)
    - [Sommaire](#sommaire)
    - [Les Propriétés](#les-propriétés)
    - [`InputText`](#inputtext)
    - [`InputNumber`](#inputnumber)
    - [`SelectField`](#selectfield)
    - [`Boutons`](#boutons)
    - [`Modale`](#modale)
    - [`DatePicker`](#datepicker)
    - [`ScrollBar`](#scrollbar)
    - [Exemple](#exemple)

---

### Les Propriétés

**Toutes les propriétés avec un * sont obligatoires** :

### `InputText`

- `idName` * : {String} Correspond aux propriétés `htmlFor` et `className` du label, ainsi qu'à l'`id` et au `name` de l'input.
- `labelName` : {String} contenu `label` et `placeholder`
- `isRequired` : {Booléen} Indique si la valeur est requise ou non
- `myClass` * : nom de la classe du composant {String}
- `toUpperCase` {Boolean} change la première lettre de chaque mot du label.
- `onChange` : Pour avoir un composant contrôlé, permet de récupérer les valeurs de l'entrée : *name* et *value*, pour chaque action au clavier.
- `value`: {String} la valeur présente dans le champs.
- `placeholder`: {String} le placeholder.


---

[Sommaire](#sommaire)

---

### `InputNumber`

- `idName` * : {String} Correspond aux propriétés `htmlFor` et `className` du label, ainsi qu'à l'`id` et au `name` de l'input.
- `labelName` : {String} contenu `label` et `placeholder`
- `isRequired` : {Booléen} Indique si la valeur est requise ou non
- `myClass` * : nom de la classe du composant {String}
- `toUpperCase` {Boolean} change la première lettre de chaque mot du label.
- `mini` {Number} valeur minimum de l'input
- `maxi` {Number} valeur maximum de l'input.
- `onChange` : Pour avoir un composant contrôlé, permet de récupérer les valeurs de l'entrée : name et value, pour chaque action au clavier.
- `value`: {String} la valeur présente dans le champs.
- `placeholder`: {String} le placeholder.

---

[Sommaire](#sommaire)

---

### `SelectField`

- `options` * : {ArrayOfObject || Array } pour la balise `option`, en cas de tableau d'objet, celui-ci doit contenir une propriété `name` qui sera affichée
- `labelName` : {String} au lieu de `label`
- `isRequired` : {Boolean} Indique si la valeur est requise ou non.
- `idName` * : {String} Correspond aux propriétés `htmlFor` et `className` de l'étiquette, ainsi qu'à l'`id` et au `name` de l'entrée.
- `onChange` : {Fonction} retourne le nom et la valeur.
- `toUpperCase` {Boolean} change la première lettre de chaque mot du label.
- `optValue` {Boolean} place en premiere valeur du champs 'Options'. Si vrai, la première valeur sera **options**, mais si `isRequired` est vrai, la valeur sera vide.
- `group` : {Boolean} false est la valeur par défaut. Si c'est true, alors `tabs` devra être comme ceci : [{car:[...arrayOfCars],bike:[...arrayOfBikes]}], alors la balise optgroup aura pour label  `car` et `bike`.
- `onClick` : {Function} Capture le clique dans le champs.
- `onBlur` : {Function} Capture le changement dans le champs.
- `value` : {String} la valeur présente dans le champs.

---

[Sommaire](#sommaire)

---

### `Boutons`

- `type` * : {String} Le type de bouton : button, submit, reset...
- `children` * : {String} Le contenu, comme : 'validate', 'save' ...
- `myClass` : {String} Une classe pour donner du style
- `idName` : {chaîne} ID de bouton
- `onClick` : {Fonction} Au besoin d'une fonction..

---

[Sommaire](#sommaire)

---

### `Modale`

- `message` * : {String} Le message que vous devez afficher
- `open` * : {Boolean} l'ordre d'ouverture la modale
- `sendStyle` * : {String} customisation des bordures bouton et texte
- `onClose` * : {Function} Donne l'ordre de fermer la modale

---

[Sommaire](#sommaire)

---

### `DatePicker`

- `idName` *: {String} Correspond aux propriétés `htmlFor` et `className` du label, ainsi qu'à l'`id` de l'input.
- `labelName` {String} Valeur du `label`.
- `myClass` {String} `className` de l'input
- `isRequired` {Boolean} Si la valuer est requise
- `toUpperCase` {Boolean} Change la première lettre de chaque mot du label.
- `lang` : {String} Pour le formatage de la date. La valeur par défaut "en" : yyyy-MM-dd. Peut être mis en français "fr" : dd-MM-yyyy
- `placeholder` : {String} Ce qui est attendu dans le champs.

---

[Sommaire](#sommaire)

---

### ScrollBar

- `barColor` : {Number} Hauteur de la bar de progression, en pixel.
- `barHeight` : {String} Couleur de la bar de progression. 5px par défaut.
- `barOpacity` : {Boolean} Donne un effet de d'opacité progressif le long de la bar. false par défaut.

---

[Sommaire](#sommaire)

---


### Exemple

```javascript
import  * as React form "react"
import { InputText, Button, Modale, DatePicker } from "@yan_coquoz/react_input"


const MyForm = () => {

    const [isOpen, setIsOpen] = React.useState(false);

const barOptions = {
    barColor: "rgba(3, 83, 255, 0.8)",
    barHeight: 5,
    barOpacity: true,
}

 function handleOpenModale(){
    setIsOpen(true)
 }
 function handleInputText(name, value){
    console.log(name, value)
    // fait ce que tu veux
 }
   

    return(
        <div>
        <ScrollBar {...barOptions}/>
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
                    lang={"fr"}
                />

                <Button type="submit" onClick={handleOpenModale}>Save</Button>
         
            </form>
            <div>
                <Button type="button" onClick={()=>setIsOpen(!isOpen)}>
                            Open Modale
                </Button>
                <Modale message="Hello World !!!" open={isOpen} sendStyle={"red"} onClose={()=> setIsOpen(!isOpen)} />
            </div>
        </div>
    )
}
```

---

[Sommaire](#sommaire)

---
