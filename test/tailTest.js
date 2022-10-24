const tail = require('../tail');
const assertEqual = require('../assertEqual');



const words = ['yo yo', 'Lighthouse', 'labs'];
(tail(words));
assertEqual(words.length,3);
