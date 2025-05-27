let fooditems = ["potato", "apple", "litchi", "tomato"];

//Push
fooditems.push("chips", "burger");
console.log(fooditems);

// Pop 
fooditems.pop("chips", "burger");
let deletedItem = fooditems.pop();
console.log(fooditems);
console.log("deleted", deletedItem);

// toString 
console.log(fooditems);
console.log(fooditems.toString());

// Concat
let marverlHero =["thor", "spiderman", "ironman"];
let dcHero = ["superman", "batman"];
let indianHero = ["shaktiman", "krish"];

let heros = marverlHero.concat(dcHero, indianHero);
console.log(heros);

// Unshift
let marverlHeros =["thor", "spiderman", "ironman"];
marverlHeros.unshift("antman");

// Shift
let dcHeros = ["superman", "batman", "man" ];
marverlHeros.shift;

// Slice 
let hero =["thor", "spiderman", "ironman", "superman", "batman", "man" ];
console.log(hero);
console.log(hero.slice(1, 3));

// Splice
let arr =[1,2,3,4,5,6,7];
arr.splice(2, 2, 101, 102);

// Add element
arr.splice(2, 0, 101);

// Delete element
arr.splice(3, 1);

// Replace Element
arr.splice(3, 1, 101);