// 10.4 - Rest - Spread - Exercise;


const filterOutOdds = (...argArr) => argArr.filter(num => num % 2 === 0);


const findMin = (...argArr) => Math.min(...argArr);


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });


const doubleAndReturnArgs = (arr, ...argArr) => [...arr, ...argArr.map(val => val * 2)];


/** remove a random element in the items array
and return a new array without that item. */

const myRemoveRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items.filter((val, i) => i !== randomIndex);
};

const removeRandom = items => {
    let randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]: val });