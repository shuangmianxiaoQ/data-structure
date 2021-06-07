/**
 * 深度优先遍历（Depth-First-Search）
 * @param {*} root 根节点
 * @description
 * 1. 访问根节点
 * 2. 对根节点的 children 挨个进行深度优先遍历
 */
const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};

/**
 * 广度优先遍历（Breadth-First-Search）
 * @param {*} root 根节点
 * @description
 * 1. 新建一个队列，把根节点加入
 * 2. 把队头出队并访问
 * 3. 把队头的 children 挨个入队
 * 4. 重复第二、三步，直到队列为空
 */
const bfs = (root) => {
  const queue = [root];
  while (queue.length) {
    const head = queue.shift();
    console.log(head.val);
    head.children.forEach((child) => queue.push(child));
  }
};

/**
 * 二叉树先序遍历（递归）
 * @param {*} root 根节点
 * @description
 * 1. 访问根节点
 * 2. 对根节点的左子树进行先序遍历
 * 3. 对根节点的右子树进行先序遍历
 */
const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

/**
 * 二叉树中序遍历（递归）
 * @param {*} root 根节点
 * @description
 * 1. 对根节点的左子树进行中序遍历
 * 2. 访问根节点
 * 3. 对根节点的右子树进行中序遍历
 */
const inOrder = (root) => {
  if (!root) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};

/**
 * 二叉树中序遍历（递归）
 * @param {*} root 根节点
 * @description
 * 1. 对根节点的左子树进行后序遍历
 * 2. 对根节点的右子树进行后序遍历
 * 3. 访问根节点
 */
const postOrder = (root) => {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

export { dfs, bfs, preOrder, inOrder, postOrder };
