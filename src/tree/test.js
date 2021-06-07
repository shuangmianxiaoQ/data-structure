import { dfs, bfs, preOrder, inOrder, postOrder } from "./index";

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
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
};

// dfs(tree);

// bfs(tree);

// preOrder(binaryTree);

// inOrder(binaryTree);

postOrder(binaryTree);
