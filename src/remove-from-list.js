const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let current = l;
  let prev = null;
  let index = 0;
  const removeList = [];
  let itemIndex;
  while (current) {
    if (current.value === k) {
      removeList.push(index);
    }
    current = current.next;
    index++;
  }
  console.log(removeList);
  itemIndex = removeList.pop();
  while (itemIndex != undefined) {
    if (itemIndex === 0) {
      l = l.next;
    } else {
      current = l;
      index = 0;
      while (index < itemIndex) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    itemIndex = removeList.pop();
  }
  return l;
}

module.exports = {
  removeKFromList
};
