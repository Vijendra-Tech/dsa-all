/**
 * item, next
 */

class Node {
  constructor(val) {
    this.item = val;
    this.next = null;
  }
}
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //insert at end
  push(item) {
    var newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  //traverse the LL
  traverse() {
    var curr = this.head;
    while (curr) {
      console.log(curr.item);
      curr = curr.next;
    }
  }
  /** pop algo:
   *  if there are no nodes in LL then just return
   *   loop though until reach tail
   *    set next of second last to null
   *   set tail
   *   decrement size
   *   return the removed val
   *
   */
  pop() {
    if (!this.head) {
      return undefined;
    }
    var curr = this.head;
    var newtail = this.tail;
    while (curr.next) {
      newtail = curr;
      curr = curr.next;
    }
    this.tail = newtail;
    this.tail.next = null;
    this.size--;
    return curr;
  }
  //remove first element from node

  shift() {
    //if no items then return undefine
    //set head = head.next
    //set next of head null
    //decrease size
    if (!this.head) {
      return undefined;
    }
    var curr = this.head;
    this.head = curr.next;
    curr.next = null;
    this.size--;
    return curr;
  }
}

//test
var ll = new LL();
ll.push(23);
ll.push(34);
ll.push(5);

ll.shift();
ll.shift();
console.log(ll);

ll.traverse();
