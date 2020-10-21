function nodeDepths(root) {
	objSum = [0];
    _nodeDepths(root, 0, objSum);
	return objSum[0];
}

function _nodeDepths(node, depth, objSum) {
	if(!node) {
		return;
	}
	objSum[0] += depth;
	_nodeDepths(node.left, depth+1, objSum);
	_nodeDepths(node.right, depth+1, objSum);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
