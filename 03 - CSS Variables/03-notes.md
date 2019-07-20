#03-notes

Variables in CSS can be declared on a tag or ::root {}.
##Var declaration syntax:

    --varSize: 10px;
    --color: rgb(255, 255, 255);
    --fontSize: 1em;

##Referencing a variable:

THEY ARE TREATED LIKE PROPERTY NAMES!!!

```css
    div {
        margin-top: var(--var1);
        font: var(--fontSize);
        background-color: var(--color);
    }
```
```js
document.querySelector('elemName').style.setProperty('--var', var )

```
##Node List vs Array! 

querySelectorAll() returns a **NODE LIST** and you don't need to specify a type of element you are getting. 

getElementByTag() returns and array of DOM objects(elems?) which is different from Node List. Arrays have a different set of methods available to work with them.


Question? will these variable be availble globally if declared in the tag?

## document.documentElement.style.setProperty(`--${this.name}`)
style.setProperty(propertyName, value, priority); //when we don't know which property we are going to set (like in style.color)

## 
```js
function someFunction(input) {
    var container = input.attribute || ''; // adding OR '' to make sure container never has an undefined value
}
```

##The difference between node list and an array

## Event: change
The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user. 

##to add two events, add eventListeners in separate statements. (?)

##Document.documentElement:
-- returns the Element that is the root element of the document

```js
var rootElement = document.documentElement;
var firstTier = rootElement.childNodes;
// firstTier is the NodeList of the direct children of the root element
for (var i = 0; i < firstTier.length; i++) {
   // do something with each direct kid of the root element
   // as firstTier[i]
}
```


