import DoublyLinkedList from "./index";

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.insert(2, 4), "insert");

console.log(list.removeAt(1), "removeAt");

console.log(list);
