class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
// 이중 연결 리스트에는 헤드 포인터와 테일 포인터가 있음
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  insertAthead(value) {
    if (this.head === null) {
      this.head = new DoublyLinkedListNode(value);
      this.tail = this.head;
    } else {
      const temp = new DoublyLinkedListNode(value);
      temp.next = this.head;
      this.head.prev = temp; // 값만 바꿈
      this.head = temp; // head 교체
    }
    this.size++;
  }
  deleteAthead() {
    let toReturn = null;
    if (this.head != null) {
      toReturn = this.head.data;

      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
        // 참조 주소가 같을 경우
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
    this.size--;
    return toReturn; // 없어도 동작함
  }

  deletAtTail() {
    let toReturn = null;
    if (this.tail !== null) {
      toReturn = this.tail.data;
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } // 하나만 있는 상태
      else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
    this.size--;
    return toReturn;
  }
  findStartingHead(value) {
    let currenthead = this.head;
    while (currenthead) {
      if (currenthead.data === value) {
        return true;
      }
      currenthead = currenthead.next;
    }
    return false;
  }

  findStartingTail(value) {
    let currentTail = this.tail;
    while (currentTail) {
      if (currentTail.data === value) {
        return true;
      }
      currentTail = currentTail.prev;
    }
    return false;
  }
}

const dill = new DoublyLinkedList();
dill.insertAthead(10);
dill.insertAthead(11);
dill.insertAthead(12);
dill.insertAthead(13);

dill.deleteAthead();
console.log("head:", dill.head.data);

dill.deletAtTail();
console.log("tail:", dill.tail.data);

console.log("search", dill.findStartingHead(12));
console.log("search", dill.findStartingTail(12));

// console.log(dill.head.data);
// console.log(dill.head.next.data);
// console.log(dill.head.next.next.data);
// console.log("prev");
// console.log(dill.head.next.next.prev.data);
// console.log(dill.head.next.next.prev.prev.data);
// console.log(dill.head.data.prev);
