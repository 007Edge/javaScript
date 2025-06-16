const m_hero = ["Thor", "IronMan", "SpiderMan"]
const dc_hero = ["Flash", "SuperMan", "BatMan"]

// m_hero.push(dc_hero);     // will create array inside array and the changes will be made in orignal array i.e. m_hero
// console.log(m_hero);  

/* 

const sum_hero = m_hero.join(dc_hero); 
console.log(typeof sum_hero);       // merge array and return string
console.log(sum_hero.split(","));              // you can use split function to get array

*/

/*

const new_heros = m_hero.concat(dc_hero);
console.log(new_heros);

const newHeros = [...m_hero, ...dc_hero];           // NOTE: You can add as many arrays as you want.
console.log(newHeros);

*/

/* 

const nums = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const fix = nums.flat(Infinity);           // array_name.flat(depth)
console.log(fix);

*/


console.log(Array.isArray(m_hero));            // returnType boolean
console.log(Array.from("EDGE"));                // splits each character and forms an array
console.log(Array.from({name: "SHIVAM"}));      // {} this curly brace represents an object

const num1 = 10;
const num2 = 20;
const num3 = 30;

console.log(Array.of(num1, num2, num3));        // will make array of num1, num2, num3





