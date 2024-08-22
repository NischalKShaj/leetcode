class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const l1 = new LinkedList();
l1.append(2);
l1.append(4);
l1.append(3);
const l2 = new LinkedList();
l2.append(5);
l2.append(6);
l2.append(4);
