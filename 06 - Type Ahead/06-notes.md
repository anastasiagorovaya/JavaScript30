#06-Notes

## fetch():

##spread operator
when you pass in array as an argument, it will be processed as an array as an object, a thing on its own
but if you do spread like so function(...array), the array will be 'unpacked', and its elements will become arguments.

##JavaScript Regex

```js

let matcher = new RegExp(matchWord, flag)
```
There are only 6 of them in JavaScript:

**i**
With this flag the search is case-insensitive: no difference between A and a (see the example below).
**g**
With this flag the search looks for all matches, without it – only the first one (we’ll see uses in the next chapter).
**m**
Multiline mode (covered in the chapter Multiline mode, flag "m").
**s**
“Dotall” mode, allows . to match newlines (covered in the chapter Character classes).
**u**
Enables full unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u".
**y**
Sticky mode (covered in the chapter Sticky flag "y", searching at position)


##.join()

```js
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

## string.replace()
```js
var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```