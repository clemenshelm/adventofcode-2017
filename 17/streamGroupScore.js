parseGarbage = (stream, index) => {
  let currentIndex = index + 1;

  while(true) {
    const currentChar = stream.charAt(currentIndex);
    switch(currentChar) {
      case '>': return { endIndex: currentIndex };
      case '!': currentIndex ++;
      default: currentIndex++;
    }
  }
}

parseGroup = (stream, index, ownScore) => {
  let currentIndex = index + 1;
  let nestedScore = 0;
  console.log(stream.charAt(currentIndex));

  while(true) {
    const currentChar = stream.charAt(currentIndex);
    switch(currentChar) {
      case '{': {
        const { endIndex, score } = parseGroup(stream, currentIndex, ownScore + 1);
        nestedScore += score;
        currentIndex = endIndex + 1;
        break;
      }
      case ',':
        currentIndex++;
        break;
      case '}': return { endIndex: currentIndex, score: nestedScore + ownScore };
      case '<': {
        const { endIndex } = parseGarbage(stream, currentIndex);
        currentIndex = endIndex + 1;
        break;
      }
      default: throw new Error(`Unexpected character ${currentChar} at index ${currentIndex}`);
    }
  }
};

module.exports = (stream) => {
  const { score } = parseGroup(stream, 0, 1);
  return score;
}
