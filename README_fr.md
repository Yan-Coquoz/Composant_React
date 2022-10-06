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

Ces propriétés (`InputText`, `InputNumber` ) sont communes aux composants.

**Toutes les propriétés avec un * sont obligatoires** :

- `idName` * : {String} Correspond aux propriétés `htmlFor` et `className` de l'étiquette, ainsi qu'à l'`id` et au `name` de l'entrée.
- `label` : {String} contenu `Label` et `placeholder`
- `sendValue` * : {Fonction} Déclenche une action
- `isRequired` : {Booléen} Indique si la valeur est requise ou non
- `myClass` * : nom de la classe du composant {String}

---

`Select`

- `tabs` * : {Table des objets} pour la balise `option`, doit contenir une propriété `name` qui sera affichée
- `name` * : {String} au lieu de `label`
- `isRequired` : {Booléen} Indique si la valeur est requise ou non.
- `idName` : {String} Correspond aux propriétés `htmlFor` et `className` de l'étiquette, ainsi qu'à l'`id` et au `name` de l'entrée.

---

`Boutons`:

- `type` * : {String} Le type de bouton : button, submit, reset...
- `children` * : {String} Le contenu, comme : 'validate', 'save' ...
- `myClass` : {String} Une classe pour donner du style
- `idName` : {chaîne} ID de bouton
- `onClick` : {Fonction} Si vous avez besoin d'une fonction..

---

`Modale` :

- `message` * : {String} Le message que vous devez afficher
- `open` * : {Function} l'ordre d'ouverture du modal
- `sendStyle` * : {String} customisation des bordures bouton et texte

Exemple :

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
            <Modale message="Hello World !!!" open={()=>handleOpenModal()} sendStyle={"red"} />
        </div>
    )
}
```
