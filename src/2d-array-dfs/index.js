// 方向数组，分别代表上下左右
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

/**
 * 二维矩阵深度优先遍历
 * @param {any[][]} grid
 * @param {number} i
 * @param {number} j
 * @param {boolean[][]} visited
 */
const dfs = (grid, i, j, visited) => {
  const m = grid.length;
  const n = grid[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return;
  if (visited[i][j]) return;

  visited[i][j] = true;
  console.log(i, j, grid[i][j]);

  // dfs(grid, i - 1, j, visited); // 上
  // dfs(grid, i + 1, j, visited); // 下
  // dfs(grid, i, j - 1, visited); // 左
  // dfs(grid, i, j + 1, visited); // 右

  for (let d of dirs) {
    dfs(grid, i + d[0], i + d[1], visited);
  }
};

export default dfs;
