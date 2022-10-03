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

Ces propriétés sont communes aux composants :

- idName : {String} Correspond aux propriétés `htmlFor` et du `className` du label, ainsi que l'`id` et le `name` de l'input.
- label : {String} Contenu du `label` et du `placeholder`
- sendValue : {Function} Déclenche une action
- isRequired : {Boolean} Si la valeur est requise ou non
- myClass : {String} nom de la classe du composant

Le composant `Select` prend en plus la propriété
 `tabs` : {Array of Object} destiné à la balise `option`

Exemple :

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

```
