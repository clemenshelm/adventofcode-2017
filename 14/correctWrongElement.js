const getRootElement = require('./getRootElement.js');
const calculateTotalWeight = require('./calculateTotalWeight.js');

const unbalancedDecendant = (root, elements) => {
  const children = root.children.map(c => elements.find(e => e.name === c))
  const sortedChildren = children.sort((a, b) => a.totalWeight - b.totalWeight);
  const medianWeight = sortedChildren[Math.floor(sortedChildren.length / 2)].totalWeight;
  const unbalancedChild = children.find(c => c.totalWeight !== medianWeight);

  if (!unbalancedChild) {
    return null;
  }

  if (unbalancedChild.children) {
    const decendant = unbalancedDecendant(unbalancedChild, elements);
    if (decendant) {
      return decendant;
    }
  }

  const weightDifference = unbalancedChild.totalWeight - medianWeight;
  return { name: unbalancedChild.name, weight: unbalancedChild.weight - weightDifference };
}

module.exports = (elements) => {
  const weightedElements = calculateTotalWeight(elements);
  const rootElement = getRootElement(elements);

  return unbalancedDecendant(rootElement, weightedElements);
}
