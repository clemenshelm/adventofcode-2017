const assert = require('assert');
const applyFractal = require('./applyFractal.js');
const split = require('./split.js');
const join = require('./join.js');

describe('applying a fractal pattern', () => {
  it('applies the fractal when the pattern matches', () => {
    const square = [
      [0, 0],
      [0, 1],
    ];
    const enhancement = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [0, 0],
        [0, 1],
      ],
      enhancement,
    };

    assert.deepEqual(applyFractal(square, fractal), enhancement);
  });

  it('doesn’t apply the fractal when the pattern doesn’t match', () => {
    const square = [
      [1, 0],
      [0, 1],
    ];
    const enhancement = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [0, 0],
        [0, 1],
      ],
      enhancement,
    };
    assert.equal(applyFractal(square, fractal), null);
  });

  it('applies the fractal when the pattern matches the square rotated twice', () => {
    const square = [
      [1, 0],
      [0, 0],
    ];
    const enhancement = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [0, 0],
        [0, 1],
      ],
      enhancement,
    };

    assert.deepEqual(applyFractal(square, fractal), enhancement);
  });

  it('applies the fractal when the pattern matches the square rotated once', () => {
    const square = [
      [1, 1],
      [0, 0],
    ];
    const enhancement = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [1, 0],
        [1, 0],
      ],
      enhancement,
    };

    assert.deepEqual(applyFractal(square, fractal), enhancement);
  });

  it('applies the fractal when the pattern matches the square flipped along the x axis', () => {
    const square = [
      [1, 0],
      [0, 0],
    ];
    const enhancement = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [0, 0],
        [1, 0],
      ],
      enhancement,
    };

    assert.deepEqual(applyFractal(square, fractal), enhancement);
  });

  it('applies the fractal when the pattern matches the square flipped along the y axis', () => {
    const square = [
      [0, 0],
      [0, 1],
    ];
    const enhancement = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [0, 0],
        [1, 0],
      ],
      enhancement,
    };

    assert.deepEqual(applyFractal(square, fractal), enhancement);
  });

  it('applies the fractal when the pattern matches the square is transposed', () => {
    const square = [
      [1, 0, 1],
      [1, 1, 0],
      [0, 1, 0],
    ];
    const enhancement = [
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    const fractal = {
      pattern: [
        [1, 1, 0],
        [0, 1, 1],
        [1, 0, 0],
      ],
      enhancement,
    };

    assert.deepEqual(applyFractal(square, fractal), enhancement);
  })
});

describe('splitting the grid', () => {
  it('splits a 2x2 grid', () => {
    const grid = [
      [1, 0],
      [0, 1],
    ];
    assert.deepEqual(split(grid), [grid]);
  });

  it('splits a 4x4 grid', () => {
    const grid = [
      [1, 0, 1, 1],
      [0, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 1, 1, 1],
    ];
    assert.deepEqual(split(grid), [
      [[1, 0], [0, 1]],
      [[1, 1], [1, 0]],
      [[1, 0], [0, 1]],
      [[0, 0], [1, 1]]
    ]);
  });

  it('splits a 3x3 grid', () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ];
    assert.deepEqual(split(grid), [grid]);
  });
});

describe('joining segments', () => {
  it('joins four 2x2 segments', () => {
    const segments = [
      [[1, 0], [0, 1]],
      [[1, 1], [1, 0]],
      [[1, 0], [0, 1]],
      [[0, 0], [1, 1]]
    ];
    assert.deepEqual(join(segments), [
      [1, 0, 1, 1],
      [0, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 1, 1, 1],
    ]);
  });

  it('joins four different 2x2 segments', () => {
    const segments = [
      [[0, 0], [0, 1]],
      [[1, 0], [1, 0]],
      [[1, 1], [0, 1]],
      [[0, 1], [1, 0]]
    ];
    assert.deepEqual(join(segments), [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 1],
      [0, 1, 1, 0],
    ]);
  });

  it('joins one 3x3 segment', () => {
    const segments = [
      [
        [1, 0, 1],
        [0, 1, 1],
        [1, 1, 1],
      ]
    ];
    assert.deepEqual(join(segments), [
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ]);
  });

  it('joins four 3x3 segment', () => {
    const segments = [
      [[0, 0, 0], [1, 0, 0], [0, 0, 1]],
      [[0, 0, 0], [1, 0, 0], [0, 0, 1]],
      [[1, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 1], [0, 0, 1], [1, 0, 0]]
    ];
    assert.deepEqual(join(segments), [
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 0],
    ]);
  });
});
