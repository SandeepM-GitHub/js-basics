const name = "sandeep "
const ager = 24

console.log(name + ager + " value");

console.log(`Hello my name is ${name} and my age is ${ager}`);

const gameName = new String('sandeep-jog-dan')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4) // second digit is an exclusion
console.log(newString);

const anotherString = gameName.slice(2,4)
console.log(anotherString);

const stringOne = "  sandy  |"
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://san.com/san%20sid"

console.log(url.replace('%20', '-'));
console.log(url.includes('dan'));

console.log(gameName.split('-'));


