// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    
      let first = headOne;
      let second = headTwo;
      let prevSecond = null;
      let temp;
      
      while (first && second) {
          if (first.value < second.value) {
              temp = first.next;
              if (!prevSecond) {
                  first.next = headTwo;
                  headTwo = first;
              }
              else {
                  prevSecond.next = first;
                  first.next = second;
              }
              prevSecond = first;
              first = temp;
          } else {
              prevSecond = second;
              second = second.next;
          }
      }
      if (first) prevSecond.next = first;
      return headTwo;
  }
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;
  