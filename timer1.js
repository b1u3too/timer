const input = process.argv.slice(2);
const goodInput = [];

for (const item of input) {
  if (!isNaN(Number(item)) && Number(item) > 0) {
    goodInput.push(Number(item));
  }
}

for (const secs of goodInput) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000*secs)
}

console.log("goodInput", goodInput);