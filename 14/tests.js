const assert = require('assert');
const getRootElement = require('./getRootElement.js');
const calculateTotalWeight = require('./calculateTotalWeight.js');
const correctWrongElement = require('./correctWrongElement.js');

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

describe('calculating total weights', () => {
  it('is the element’s weight if the element is a leaf', () => {
    const resultElements = calculateTotalWeight([{ name: 'xhth', weight: 57 }]);

    assert.deepEqual(resultElements, [{ name: 'xhth', weight: 57, totalWeight: 57 }]);
  })

  it('is the sum of the subelements’ weight and the own weight if the element is not a leaf', () => {
    const elements = [
      { name: 'pbga', weight: 66 },
      { name: 'padx', weight: 45, children: ['pbga', 'havc', 'qoyq'] },
      { name: 'havc', weight: 66 },
      { name: 'qoyq', weight: 66 },
    ];

    const resultElements = calculateTotalWeight(elements);

    assert.deepEqual(resultElements.find(e => e.name === 'pbga').totalWeight, 66);
    assert.deepEqual(resultElements.find(e => e.name === 'padx').totalWeight, 243);
    assert.deepEqual(resultElements.find(e => e.name === 'qoyq').totalWeight, 66);
    assert.deepEqual(resultElements.find(e => e.name === 'havc').totalWeight, 66);
  })
});

describe('determining the corrected weight for a node', () => {
  it('lists a leaf which is unbalanced', () => {
    const elements = [
      { name: 'pbga', weight: 66 },
      { name: 'padx', weight: 45, children: ['pbga', 'havc', 'qoyq'] },
      { name: 'havc', weight: 68 },
      { name: 'qoyq', weight: 66 },
    ];

    const correctedElement = correctWrongElement(elements);
    assert.deepEqual(correctedElement, { name: 'havc', weight: 66 });
  });

  it('lists a node with children which is unbalanced', () => {
    const elements = [
      { name: 'pbga', weight: 66 },
      { name: 'xhth', weight: 57 },
      { name: 'ebii', weight: 61 },
      { name: 'havc', weight: 66 },
      { name: 'ktlj', weight: 57 },
      { name: 'fwft', weight: 72, children: ['ktlj', 'cntj', 'xhth'] },
      { name: 'qoyq', weight: 66 },
      { name: 'padx', weight: 45, children: ['pbga', 'havc', 'qoyq'] },
      { name: 'tknk', weight: 41, children: ['ugml', 'padx', 'fwft'] },
      { name: 'jptl', weight: 61 },
      { name: 'ugml', weight: 68, children: ['gyxo', 'ebii', 'jptl'] },
      { name: 'gyxo', weight: 61 },
      { name: 'cntj', weight: 57 },
    ];

    const correctedElement = correctWrongElement(elements);
    assert.deepEqual(correctedElement, { name: 'ugml', weight: 60 });
  });
})
