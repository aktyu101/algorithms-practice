class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
    } else {
      const temp = this.head; // 2 (1)
      this.head = new SinglyLinkedListNode(value); //head 교체
      this.head.next = temp;
    }
    this.size++;
  }
  // 2 -> 1 -> null

  remove(value) {
    if (this.size === 0) return;

    let currenthead = this.head;
    if (currenthead.data === value) {
      // 헤드 삭제 후 값 교체
      this.head = currenthead.next;
      this.size--;
    } else {
      let prev = currenthead;
      while (currenthead.next) {
        if (currenthead.data === value) {
          // 삭제
          prev.next = currenthead.next; //못찾는 상황
          prev = currenthead;
          currenthead = currenthead.next;
          break;
        }
        prev = currenthead;
        currenthead = currenthead.next;
      }
      if (currenthead.data === value) {
        prev.next = null;
        this.size--; // 일치하는 값이 없을 경우 사이즈를 줄이지 않음
      }
    }
  }

  allRemove(value) {
    if (this.size === 0) return;
    let currentHead = this.head;
    // 일치하는 값이 헤드에 있는 경우 처리
    while (currentHead !== null && currentHead.data === value) {
      this.head = currentHead.next;
      currentHead = this.head;
      this.size--;
    }
    // 나머지 목록을 탐색하여 다른 발생을 찾고 제거
    let prev = null;
    while (currentHead !== null) {
      if (currentHead.data === value) {
        if (prev !== null) {
          prev.next = currentHead.next;
        }
        this.size--;
      } else {
        // 일치하는 값이 없으면 다음 노드로 이동
        prev = currentHead;
      }
      currentHead = currentHead.next;
    }
  }

  allRemove2(value) {
    if (this.size === 0) return;

    let currenthead = this.head;
    let prev = null;

    while (currenthead) {
      if (currenthead.data === value) {
        if (prev === null) {
          this.head = currenthead.next;
        } else {
          prev.next = currenthead.next;
        }
        this.size--;
      } else {
        prev = currenthead;
      }
      currenthead = currenthead.next;
    }
  }

  deleteAtHead() {
    let toReturn = null;

    if (this.head !== null) {
      toReturn = this.head.data;
      this.head = this.head.next;
      this.size--;
    }
    return toReturn;
  }

  find(value) {
    let currenthead = this.head;

    while (currenthead) {
      if (currenthead.data == value) {
        return true;
      }
      currenthead = currenthead.next;
    }
    return false;
  }
}

const sll1 = new SinglyLinkedList();
sll1.insert(5);
sll1.insert(1);
sll1.insert(3);
sll1.insert(2);
sll1.insert(1);
sll1.insert(1);
sll1.allRemove2(1);

console.log("head", sll1.head.data);
console.log("head next data", sll1.head.next.data);
console.log("head next next data", sll1.head.next.next?.data);
console.log("head next next next data", sll1.head.next.next.next?.data);
console.log("head next next next data", sll1.head.next.next.next?.next?.data);
// ? => null이 예상되면 undefined 반환

console.log("recent", sll1.Recent);
// console.log("delete head", sll1.deleteAtHead());

// 예외처리 없는 상태필요
// 일치하는 값이 여러개인 경우
