import Tree from "./index";

const bst = new Tree();

bst.addValue(6);
bst.addValue(3);
bst.addValue(9);
bst.addValue(2);
bst.addValue(8);
bst.addValue(4);

bst.traverse();
const minNode = bst.findMinNode();
const found = bst.contains(8);
console.log("min: " + minNode.value);
console.log("found: " + found);
bst.remove(4);
