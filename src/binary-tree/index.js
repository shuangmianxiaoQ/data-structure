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

  findMin() {
    if (!this.left) return this;
    return this.left.findMin();
  }

  find(value) {
    if (value === this.value) {
      return this;
    }
    if (this.left && value < this.value) {
      return this.left.find(value);
    }
    if (this.right && value > this.value) {
      return this.right.find(value);
    }
    return null;
  }

  remove(node) {
    console.log(node);
    if (!node) {
      throw new Error("item not found");
    }
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

  findMinNode() {
    if (!this.root) return null;
    return this.root.findMin();
  }

  contains(value) {
    return !!this.root.find(value);
  }

  remove(value) {
    const node = this.root.find(value);
    this.root.remove(node);
  }
}
