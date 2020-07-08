// ES2015 Tableau
// SPREAD Array

// comme une conversion d'un tableau vers une liste de valeur

const nbs = [1, 2, 3, 4];

// const others = [0, nbs[0], nbs[1], nbs[2], nbs[3], 5];
// avec le SPREAD
const others = [0, ...nbs, 5];

const shallowCloneArray = [...nbs];

function sum(a, b, c, d) {
  return a + b + c + d;
}

// console.log(sum(nbs[0], nbs[1], nbs[2], nbs[3]));
// avec le SPREAD
console.log(sum(...nbs)); // 10

// ES2018
// SPREAD Object
// comme une conversion d'un object vers une liste de clé/valeur

const coords = {x: 1, y: 2};

// const coords3d = {x: coords.x, y: coords.z, z: 3};
// avec le SPREAD
const coords3d = {...coords, z: 3};

const shallowCloneObject = {...nbs};

