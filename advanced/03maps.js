// var obj  = new Object()

var myMap = new Map();

myMap.set(0, "UNO");
myMap.set(1, "dos");
myMap.set(2, "tres");
myMap.set(3, "quatro");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`key is ${key}`);
}

for (let key of myMap.values()) {
  console.log(`Value is ${key}`);
}

// for of is always give you key first

for (let [key, value] of myMap) {
    console.log(`
    key is ${key}
    Value is ${value}`);
}

// forEach is always give you value first
myMap.forEach((value, key) => console.log(`${value} and key  is ${key} `));


myMap.delete(2);

console.log(myMap);