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

## array.map() does something with each element of the array, you specify what exactly in the parenthesis. 
```js
//add 5 to each element
var nums = [1, 2, 3, 4, 5]
var addFive = nums.map(num => num + 5)

> addFive
[ 6, 7, 8, 9, 10 ]
```

## array.sort() -> iterates through the array, but looks at two elements at a time and assigns a sort order to them. Returns -1 and 1. 

var nums = [0, 5, 7, 3, 2]
const orderedNums = nums.sort((a, b) => a > b ?  1 : -1)
> orderedNums
[ 0, 2, 3, 5, 7 ]

