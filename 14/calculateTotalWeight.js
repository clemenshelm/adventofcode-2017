const getRootElement = require('./getRootElement.js');

const totalWeightSubtree = (root, elements) => {
  if (root.children) {
    const weightedDecendants = root.children
      .map(child => elements.find(e => e.name === child))
      .map(root => totalWeightSubtree(root, elements))
      .reduce((all, child) => [...all, ...child], []);
    const childrenWeight = root.children
      .map(c => weightedDecendants.find(d => d.name === c).totalWeight)
      .reduce((sum, weight) => sum + weight)
    const totalWeight = root.weight + childrenWeight;

    return [...weightedDecendants, { ...root, totalWeight }];
  }

  return [{ ...root, totalWeight: root.weight }]
}

module.exports = (elements) => {
  const rootElement = getRootElement(elements);
  return totalWeightSubtree(rootElement, elements);
}
