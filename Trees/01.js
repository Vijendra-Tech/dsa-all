/** Binary search tree -  */

//Tree node
class Node {
  constructor(val) {
    this.item = val;
    this.left = null;
    this.right = null;
  }
}

//BST class
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    //ig root is null then new element will be new node
    //check if item >root - > go to right -> -> same with right child
    // if item < root - then go to left => -> left is null then add new node as child of left node
    var node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      // iterate till last node
      var curr = this.root;
      while (true) {
        if (val === curr.item) {
          return undefined;
        }
        if (val < curr.item) {
          if (curr.left === null) {
            curr.left = node;
            return this;
          } else {
            curr = curr.left;
          }
        } else if (val > curr.item) {
          if (curr.right === null) {
            curr.right = node;
            return this;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }

  //find solutions
  find(val) {
    var curr = this.root;
    var found = false;
    if (this.root === null) {
      return false;
    }
    // if (val === curr.item) {
    //   return true;
    // } else {
    //   while (true) {
    //     if (val === curr.item) {
    //       return true;
    //     }
    //     if (val < curr.item) {
    //       if (curr.left === null) {
    //         return false;
    //       } else {
    //         curr = curr.left;
    //       }
    //     } else if (val > curr.item) {
    //       if (curr.right === null) {
    //         return false;
    //       } else {
    //         curr = curr.right;
    //       }
    //     }
    //   }
    // }
    //simpe way
    while (curr && !found) {
      if (val < curr.item) {
        curr = curr.left;
      } else if (val > curr.item) {
        curr = curr.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return undefined;
    }
    return curr;
  }
}

//test
var bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(9);
bst.insert(11);

console.log(bst.find(9));
