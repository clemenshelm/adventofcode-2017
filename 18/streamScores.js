parseGarbage = (stream, index) => {
  let currentIndex = index + 1;
  let score = 0;

  while(true) {
    const currentChar = stream.charAt(currentIndex);
    switch(currentChar) {
      case '>': return { endIndex: currentIndex, score };
      case '!':
        currentIndex += 2;
        break;
      default:
        currentIndex++;
        score++;
    }
  }
}

parseGroup = (stream, index, ownScore) => {
  let currentIndex = index + 1;
  let nestedScore = 0;
  let totalGargabeScore = 0;

  while(true) {
    const currentChar = stream.charAt(currentIndex);
    switch(currentChar) {
      case '{': {
        const { endIndex, score, garbageScore } = parseGroup(stream, currentIndex, ownScore + 1);
        nestedScore += score;
        currentIndex = endIndex + 1;
        totalGargabeScore += garbageScore;
        break;
      }
      case ',':
        currentIndex++;
        break;
      case '}': return {
        endIndex: currentIndex,
        score: nestedScore + ownScore,
        garbageScore: totalGargabeScore,
      };
      case '<': {
        const { endIndex, score } = parseGarbage(stream, currentIndex);
        currentIndex = endIndex + 1;
        totalGargabeScore += score;
        break;
      }
      default: throw new Error(`Unexpected character ${currentChar} at index ${currentIndex}`);
    }
  }
};

module.exports = {
  streamGroupScore(stream) {
    const { score } = parseGroup(stream, 0, 1);
    return score;
  },

  garbageScore(stream) {
    const { garbageScore } = parseGroup(stream, 0, 1);
    return garbageScore;
  }
}
