#04 Cardio Array Notes

## Filter:
    - iterates through an array, inspects every element and returns TRUE FALSE, if true - keep element, if false - remove element from the resulting array

```js
const newArray = origArray.filter(function(origArrayElem){
    return origArrayElem == true;
})
```
##console.table(array)
┌─────────┬────────────┬───────────┬──────┬────────┐
│ (index) │   first    │   last    │ year │ passed │
├─────────┼────────────┼───────────┼──────┼────────┤
│    0    │ 'Galileo'  │ 'Galilei' │ 1564 │  1642  │
│    1    │ 'Johannes' │ 'Kepler'  │ 1571 │  1630  │
└─────────┴────────────┴───────────┴──────┴────────┘
> console.table(earlyInventors[0])
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│  first  │ 'Galileo' │
│  last   │ 'Galilei' │
│  year   │   1564    │
│ passed  │   1642    │
└─────────┴───────────┘

## Fat Arrow => works as return! 