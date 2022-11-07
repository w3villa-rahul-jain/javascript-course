const arr = [1, 1, 1, 2, 3, 3, 3, 5, 8, 9]; // given array sort
let n = arr.length - 1;

const removeDuplicate = (arr) => {
  let hash = new Map();

  for (let i = 0; i < arr.length; i++) {
    let get = hash.get(arr[i]);
    if (get) {
      hash.set(arr[i], get + 1);
    } else {
      hash.set(arr[i], 1);
    }
  }
  let keys = hash.keys();
  console.log(keys);
};

removeDuplicate(arr);



