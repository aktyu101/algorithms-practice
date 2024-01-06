import { Stack } from "../231216/stack.js";
import { Queue } from "./queue.js";

class TwoStackQueue {
  //   inbox;
  //   outbox;
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(val) {
    this.inbox.push(val);
  }
  dequeue() {
    if (this.outbox.isEmpty()) {
      while (!this.inbox.isEmpty()) {
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }
}

const twoStackQueue = new TwoStackQueue();

twoStackQueue.enqueue(1);
twoStackQueue.enqueue(2);
twoStackQueue.enqueue(3);

console.log(twoStackQueue);

twoStackQueue.dequeue();
console.log(twoStackQueue);
