## Submit event:
submit event fires on the <form> element itself, and not on any <button> or <input type="submit"> inside it.

##   e.preventDefault(); //form's default behavior is to reload

## Input has property Value that gets whatever was added

##To pass in default value
```js
function takesDefaultParam(defArg = [], nonDefArg) {}
```

##To add stuff to InnerHTML you need to give a STRING!


##Map can also take the index?

##BUG! forgot the properCase for innerHTML
```js
platesList.innerHTML = plates.map((plate, i)
```

##
<input type ="checkbox" data-index=${i} id="item${i}" 
        ${plate.done ? 'checked' : '' }/>