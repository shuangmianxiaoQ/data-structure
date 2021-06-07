class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(node) {
    if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }

  visit() {
    if (this.left) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right) {
      this.right.visit();
    }
  }

  search(value) {
    if (value === this.value) {
      return this;
    }
    if (value < this.value && this.left) {
      return this.left.search(value);
    }
    if (value > this.value && this.right) {
      return this.right.search(value);
    }
    return null;
  }
}

export default class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }

  traverse() {
    this.root.visit();
  }

  search(value) {
    const found = this.root.search(value);
    if (found) {
      console.log("Found:" + found.value);
    } else {
      console.log(value + " not found");
    }
  }
}
