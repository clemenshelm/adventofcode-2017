module.exports = (elements) => {
  const allChildren = elements
    .reduce((children, el) => el.children ? [...children, ...el.children] : children, []);
  return elements.find(e => !allChildren.includes(e.name));
}
