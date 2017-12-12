module.exports = (nodeMap, firstNode) => {
  const nodeGroup = new Set([`${firstNode}`]);
  const visitedNodes = new Set();

  while (nodeGroup.size > visitedNodes.size) {
    const nodeToVisit = [...nodeGroup].find(n => !visitedNodes.has(n));
    nodeMap[`${nodeToVisit}`].forEach(n => nodeGroup.add(n));
    visitedNodes.add(`${nodeToVisit}`);
  }

  return [...nodeGroup];
};
