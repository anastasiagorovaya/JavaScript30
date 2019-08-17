## ES6 destructuring
```js
//destructuring objects
let petsObj = {
    cat: "black",
    bird: "goes to school",
    dog: {says: "woof!"}
};

let {cat, dog } = petsObj;

console.log("this is cat before the change: " + cat);
dog;

petsObj.cat = 'pink';
petsObj.dog.says = "meow!"
console.log("this is cat after the change: " + cat);
dog;

console.log(bird);
console.log(cat);

petsObj.cat = "smart"

let petsArr = ['cat', 'frog', {dog:'woof'}]

let [catFromArr] = petsArr;
console.log(catArr)

petsArr[0] = 'frog'
console.log(catArr)


