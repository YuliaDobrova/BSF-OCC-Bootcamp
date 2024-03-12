//Promises
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 is complete.");
      resolve();
    }, 3500);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 is complete.");
      resolve();
    }, 4500);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 is complete.");
      resolve();
    }, 5500);
  });
};

// Chaining Promises
step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps are comptele.");
  })
  .catch((error) => {
    console.log("An error occured:", error);
  });
