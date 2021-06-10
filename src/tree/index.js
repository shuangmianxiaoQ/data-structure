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
 * 二叉树先序遍历（非递归）
 * @param {*} root 根节点
 * @description
 * 1. 新建一个栈，把根节点加入
 * 2. 栈顶元素`n`出栈，并访问
 * 3. 利用栈的“后进先出”特性，依次将其右子树跟左子树压入栈中（存在的情况下）
 * 4. 重复第二、三步，直到栈为空
 */
const preOrder2 = (root) => {
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    // 先压入右子树，后压入左子树，出栈时先出左子树
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
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
 * 二叉树中序遍历（非递归）
 * @param {*} root 根节点
 * @description
 * 1. 新建一个栈
 * 2. 新建一个指针，指向根节点
 * 3. 利用指针遍历左子树，依次将左子树压入栈中
 * 4. 出栈，访问栈顶元素`n`，并将指针指向`n`的右子树
 * 5. 重复第二、三、四步，直到栈为空
 */
const inOrder2 = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

/**
 * 二叉树后序遍历（递归）
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

/**
 * 二叉树后序遍历（非递归）
 * @param {*} root 根节点
 * @description
 * 1. 新建一个输出栈
 * 2. 按照二叉树前序遍历非递归版思路，将出栈元素`n`依次压入输出栈中
 * 3. 输出栈依次出栈访问
 */
const postOrder2 = (root) => {
  if (!root) return;
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    // 先压入左子树，后压入右子树，出栈时先出右子树
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};

export {
  dfs,
  bfs,
  preOrder,
  preOrder2,
  inOrder,
  inOrder2,
  postOrder,
  postOrder2
};
