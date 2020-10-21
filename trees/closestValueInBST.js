// Given a BST and a target find the closed value to the target in the BST


function findClosestValueInBst(tree, target) {
    // Write your code here.
      if (tree === null) {
          return null;
      }

      var curr = tree;
      var min_diff = Number.MAX_SAFE_INTEGER;
      var stack = new Array();
      
      while (curr) {
          diff = Math.abs(target - curr.value);
          if (min_diff > diff) {		
              stack.push(curr.value);
              min_diff = diff;
          }
          if (curr.value > target) {
              curr = curr.left;
          } else {
              curr = curr.right;
          }
      }
      return stack[stack.length - 1];
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  