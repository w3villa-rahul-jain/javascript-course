const array = [1, 3, 5, 8,9,2];

const window = 3;

const len = array.length;

const slidingWindow = (arr, window, n) => {
  for (let i = 0; i <= n - window; i++) {
    let max = arr[i];
    for (let j = 1; j < window; j++) {
      if (arr[i + j] > max) {
        max = arr[i + j];
    }
    } 
console.log(max);
  }
};

slidingWindow(array, window, len);
