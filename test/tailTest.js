const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TESTING CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0],"Lighthouse");
assertEqual(tail(words)[1],"Labs");