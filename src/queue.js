const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  getUnderlyingList() {
    return this
  }

  enqueue(value) {
    if (!this.value) {
      this.value = value;
    } else {
      let current = this;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    let current = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return current;
  }
}

module.exports = {
  Queue
};
