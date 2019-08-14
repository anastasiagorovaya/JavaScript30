#Ways to copy an array
```js
    const origArray = [1, 2, 3, 4, 5, 6, 7];
    const copyArray1 = origArray.slice();
    const copyArray2 = [].concat(origArray);
    const copyArray3 = [...origArray];
    const copyArray4 = Array.from(players);
```

#Object

```js

const origObject = {
    name: 'Name',
    age: 22,
    car: 'Porsche'
}

const copyRefObject = Object.assign({}, origObject, {name: 'NewName', age: 209})

const diffCopyObje = Object.assign({}, origObject) //copied 1 level deep! if you have nested objec, they will be passed by reference