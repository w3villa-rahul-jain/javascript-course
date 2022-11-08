const arr = [3, 4, 5,7,9, 1,2];

const mountainElement = (array) => {
  let start = 0;
  let end = array.length - 1;
  let mid = parseInt((start + end) / 2);
  // console.log(mid);

  while (start < end) {
    
   if (array[mid] < array[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = parseInt((start + end) / 2);
    // console.log(start, end);
    return "Mountain element al index",start, array[start];
  }
};

console.log(mountainElement(arr));
