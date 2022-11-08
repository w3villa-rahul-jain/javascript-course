const arr = [1, 1, 1, 1, 2, 3, 3, 4, 4];

const removeDuplicate = (array) => {
  let set = new Set(arr);
  return set;
};

const removeDublicates = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] != array[i + 1]) {
      console.log("if i " + i);
      continue;
    } else {
    //   array.splice(i + 1);
    //   console.log(i, i + 1);
      // array[i+1] = 0;
      // i++;
    }
  }
  return array;
};

console.log(removeDublicates(arr));
