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
      const temp = this.head;
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
sll1.insert(1);
sll1.insert(1);
sll1.insert(10);
sll1.insert(3);
sll1.insert(3);
sll1.insert(10);

console.log("head", sll1.head.data);
console.log("head next data", sll1.head.next.data);
console.log("head next next data", sll1.head.next.next.data);
console.log("head next next next data", sll1.head.next.next.next?.data);
// ? => null이 예상되면 undefined 반환

console.log("lengths", sll1.size);
//sll1.remove(3);
console.log(sll1.size);
// console.log("delete head", sll1.deleteAtHead());
console.log(sll1.head.data);
console.log(sll1.find(12));

// 예외처리 없는 상태필요
// 일치하는 값이 여러개인 경우

function reverseSingleLinkedList(sll1) {
  let node = sll1.head;
  let prev = null;

  while (node) {
    const temp = node.next;
    node.next = prev;
    prev = node; // 노드값 갱신

    if (!temp) break;
    node = temp;
  }
  return node;
}

console.log(reverseSingleLinkedList(sll1));

// 중복 항목 제거
function deleteDuplicateInUnsortedSll(sll1) {
  const track = [];
  let temp = sll1.head;
  let prev = null;

  while (temp) {
    if (track.indexOf(temp.data) >= 0) {
      // 없으면 -1, 데이터 있는지 판단
      prev.next = temp.next;
      sll1.size--;
    } else {
      track.push(temp.data);
      prev = temp;
    }
    temp = temp.next;
  }
}

deleteDuplicateInUnsortedSll(sll1);
console.log("lengths", sll1.size);
