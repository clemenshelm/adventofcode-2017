const assert = require('assert');
const getRootElement = require('./getRootElement.js');

describe('getting the root element', () => {
  it('identifies the element containing other elements as root element', () => {
    const rootElement = getRootElement([
      { name: 'xhth', weight: 57 },
      { name: 'ktlj', weight: 57 },
      { name: 'fwft', weight: 72, children: ['ktlj', 'cntj', 'xhth'] },
      { name: 'cntj', weight: 57 },
    ]);

    assert.equal(rootElement.name, 'fwft');
  });

  it('identifies the top-most element as the root element', () => {
    const rootElement = getRootElement([
      { name: 'xhth', weight: 57 },
      { name: 'ktlj', weight: 57 },
      { name: 'fwft', weight: 72, children: ['ktlj', 'cntj', 'xhth'] },
      { name: 'cntj', weight: 57 },
      { name: 'tknk', weight: 41, children: ['ugml', 'padx', 'fwft'] },
      { name: 'ugml', weight: 68 },
      { name: 'padx', weight: 45 },
    ]);

    assert.equal(rootElement.name, 'tknk');
  });
});
