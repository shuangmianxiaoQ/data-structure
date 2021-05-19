class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /** 链表尾部添加一个元素 */
  append(value) {
    const node = new Node(value);
    let pointer = this.tail;

    if (pointer === null) {
      this.head = node;
      this.tail = node;
    } else {
      pointer.next = node;
      node.prev = pointer;
      this.tail = node;
    }

    this.length++;
  }

  /** 链表特定位置插入一个元素 */
  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(value);
    let index = 0;
    let curNode = this.head;
    let prevNode;

    if (position === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = curNode;
        curNode.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      this.append(value);
    } else {
      while (index < position) {
        index++;
        prevNode = curNode;
        curNode = curNode.next;
      }
      prevNode.next = node;
      node.prev = prevNode;
      node.next = curNode;
      curNode.prev = node;

      this.length++;

      return true;
    }
  }

  /** 删除链表特定位置的一个元素 */
  removeAt(position) {
    if (position < 0 || position >= this.length || this.length === 0) {
      return false;
    }

    let index = 0;
    let curNode = this.head;
    let prevNode;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head = curNode.next;
        this.head.prev = null;
      } else if (position === this.length - 1) {
        curNode = this.tail;
        this.tail = curNode.prev;
        this.tail.next = null;
      } else {
        while (index < position) {
          index++;
          prevNode = curNode;
          curNode = curNode.next;
        }
        prevNode.next = curNode.next;
        curNode.next.prev = prevNode;
      }
    }

    this.length--;

    return true;
  }
}
