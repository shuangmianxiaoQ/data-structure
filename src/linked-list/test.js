import LinkedList from "./index";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.insert(2, 4), "insert");

console.log(list.removeAt(1), "removeAt");

console.log(list.indexOf(4), "indexOf");

console.log(list.remove(1), "remove");

console.log(list);

document.write(`list: ${list.toString()}`);
