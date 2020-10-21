// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
        let queue = [this];
        while (queue.length) {
            let current = queue.shift();
            array.push(current.name)
            if (!current) continue;
            if(current.children) {
                for (const i of current.children) {
                    queue.push(i);
                }
            }
        }
        return array;
    }
}
  
// Do not edit the line below.
exports.Node = Node;
  