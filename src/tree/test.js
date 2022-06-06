import {
  dfs,
  bfs,
  preOrder,
  preOrder2,
  inOrder,
  inOrder2,
  postOrder,
  postOrder2
} from "./index";

const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: []
        },
        {
          val: "e",
          children: []
        }
      ]
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: []
        },
        {
          val: "g",
          children: []
        }
      ]
    }
  ]
};

const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 6,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
};

// dfs(tree);

// bfs(tree);

// preOrder(binaryTree);
// preOrder2(binaryTree);

inOrder(binaryTree);
// inOrder2(binaryTree);

// postOrder(binaryTree);
// postOrder2(binaryTree);
