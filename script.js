//your JS code here. If required.
// Get the elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to create a delayed promise
function delayedPromise(value, delay, operation) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newValue = operation(value);
      resolve(newValue);
    }, delay);
  });
}

// Handle button click
button.onclick = function () {
  const inputValue = Number(input.value);

  // Start the promise chain
  delayedPromise(inputValue, 2000, (val) => val)
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayedPromise(result, 2000, (val) => val * 2);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayedPromise(result, 1000, (val) => val - 3);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayedPromise(result, 1000, (val) => val / 2);
    })
    .then((result) => {
      output.innerText = `Result: ${result}`;
      return delayedPromise(result, 1000, (val) => val + 10);
    })
    .then((finalResult) => {
      output.innerText = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      output.innerText = `Error: ${error}`;
    });
};
