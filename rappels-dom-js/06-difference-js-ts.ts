
// le code js suivant ne fonctionne en ts
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));
// console.log(add(1, 2, 3)); // 3 non déclaré
// console.log(add(1)); // b === undefined


// class Contact {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }
// }

function add(a, b = 0, c = 0) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(1, 2, 3)); // 3 non déclaré
console.log(add(1)); // b === undefined


class Contact {
    private firstName;
    constructor(firstName) {
        this.firstName = firstName;
    }
}