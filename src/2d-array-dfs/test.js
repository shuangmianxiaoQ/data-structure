import dfs from ".";

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

const m = grid.length;
const n = grid[0].length;
const visited = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => false)
);

dfs(grid, 0, 0, visited);
