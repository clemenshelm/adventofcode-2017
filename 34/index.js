const generateBufferPosition1 = require('./generateBufferPosition1.js');
const [,, input,] = process.argv;

const pos1Generator = generateBufferPosition1({ steps: parseInt(input, 10) });

const pos1AtElement = (element) => {
  for(const { currentElement, pos1 } of pos1Generator) {
    if (currentElement === element) {
      return pos1;
    }
  }
}

const pos1 = pos1AtElement(50000000);

console.log(pos1);
