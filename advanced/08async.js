const uno = () => {
  console.log("i am first");
};

const dos = () => {
  setTimeout(() => {
    console.log("wooooo");
  }, 3000);
  console.log("i am second");
};

const tres = () => {
  console.log("i am three");
};

uno();
dos();
tres();
