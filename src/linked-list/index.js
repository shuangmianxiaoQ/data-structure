class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /** 链表尾部添加一个元素 */
  append(value) {
    const node = new Node(value);
    let poniter = this.head;

    if (this.head === null) {
      this.head = node;
    } else {
      while (poniter.next) {
        poniter = poniter.next;
      }
      poniter.next = node;
    }

    this.length++;
  }

  /** 链表特定位置插入一个元素 */
  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    } else {
      const node = new Node(value);
      let index = 0;
      let curNode = this.head;
      let prevNode;

      if (position === 0) {
        this.head = node;
        node.next = curNode;
      } else {
        while (index < position) {
          index++;
          prevNode = curNode;
          curNode = curNode.next;
        }
        prevNode.next = node;
        node.next = curNode;
      }

      this.length++;

      return true;
    }
  }

  /** 删除链表特定位置的一个元素 */
  removeAt(position) {
    if ((position < 0 && position >= this.length) || this.length === 0) {
      return false;
    } else {
      let curNode = this.head;
      let index = 0;
      let prevNode;

      if (position === 0) {
        this.head = curNode.next;
      } else {
        while (index < position) {
          index++;
          prevNode = curNode;
          curNode = curNode.next;
        }
        prevNode.next = curNode.next;
      }

      this.length--;

      return true;
    }
  }

  /** 查找元素在链表中的索引，没有则返回-1 */
  indexOf(value) {
    let index = 0;
    let pointer = this.head;

    while (pointer) {
      if (pointer.value === value) {
        return index;
      }
      index++;
      pointer = pointer.next;
    }

    return -1;
  }

  /** 从链表中删除指定元素 */
  remove(value) {
    const position = this.indexOf(value);
    return this.removeAt(position);
  }

  toString() {
    let pointer = this.head;
    let str = "";

    while (pointer) {
      str += ", " + pointer.value;
      pointer = pointer.next;
    }

    return str.slice(2);
  }
}
