
/* function float1(f) {
    if (arr === Array.isArray()) {
        Array.isArray(arr).shift()
    }
}
console.log(arr,
    float1()
    ); */
/* function concatArray() {
    let arrayX = [1, 2, 3, 4, [3, 2, 3], [1, [2], 3]];
    arrayX = [].concat.apply([],arrayX);
    console.log(arrayX);
}

concatArray(); */


let arr = [1, 2, 3, 4, [1, 2, 3], [1, [2], 3]]



function getOptions(arr) {
    return arr.reduce((som, bon) => som.concat(Array.isArray(bon) ? getOptions(bon) : bon), []);
};
let oxir = getOptions(arr);


console.log(oxir);