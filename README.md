# Advent of Code 2017

50 coding puzzles before Christmas. All of these puzzles were published in December 2017 on [adventofcode.com](http://adventofcode.com/). In this repo you'll find all 50 puzzles along with my solutions in JavaScript.

## How to run a solution

On your command line, move to the directory of the puzzle you'd like to run. First, install the dependencies:

```shell
npm install
```

All puzzle solutions can be run with `npm start`. Pass input to the puzzle as command line argument:

```shell
npm start 12345
```

All examples come with the original input, stored in `./input`. This is how to run a puzzle with the original input:

```shell
npm start "$(< input)"
```

There are test cases for all examples given in the puzzle description. You can run them with

```shell
npm test
```

## Requirements

Examples might not work with node versions < 8.
