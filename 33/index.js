const generateBuffer = require('./generateBuffer.js');
const [,, input,] = process.argv;

const bufferGenerator = generateBuffer({ steps: parseInt(input, 10) });

const bufferWithElement = (element) => {
  for(const { currentElement, buffer } of bufferGenerator) {
    if (currentElement === element) {
      return buffer;
    }
  }
}

const endBuffer = bufferWithElement(2017);
const elementAfter2017 = endBuffer[endBuffer.indexOf(2017) + 1];

console.log(elementAfter2017);
